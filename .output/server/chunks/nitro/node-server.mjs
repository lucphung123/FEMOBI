globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { defineEventHandler, handleCacheHeaders, createEvent, eventHandler, setHeaders, sendRedirect, proxyRequest, getRequestHeader, setResponseStatus, setResponseHeader, getRequestHeaders, createError, createApp, createRouter as createRouter$1, toNodeListener, fetchWithEvent, lazyEventHandler } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { snakeCase } from 'scule';
import { klona } from 'klona';
import defu, { defuFn } from 'defu';
import { hash } from 'ohash';
import { parseURL, withoutBase, joinURL, getQuery, withQuery, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage, prefixStorage } from 'unstorage';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';
import gracefulShutdown from 'http-graceful-shutdown';

const inlineAppConfig = {};



const appConfig = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/",
    "buildAssetsDir": "/_nuxt/",
    "cdnURL": ""
  },
  "nitro": {
    "envPrefix": "NUXT_",
    "routeRules": {
      "/__nuxt_error": {
        "cache": false
      },
      "/_nuxt/**": {
        "headers": {
          "cache-control": "public, max-age=31536000, immutable"
        }
      }
    }
  },
  "public": {
    "baseURL": "https://cam.codeinet.com",
    "socket_url": "nakamaws.codeinet.com"
  }
};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const _sharedRuntimeConfig = _deepFreeze(
  _applyEnv(klona(_inlineRuntimeConfig))
);
function useRuntimeConfig(event) {
  if (!event) {
    return _sharedRuntimeConfig;
  }
  if (event.context.nitro.runtimeConfig) {
    return event.context.nitro.runtimeConfig;
  }
  const runtimeConfig = klona(_inlineRuntimeConfig);
  _applyEnv(runtimeConfig);
  event.context.nitro.runtimeConfig = runtimeConfig;
  return runtimeConfig;
}
_deepFreeze(klona(appConfig));
function _getEnv(key) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function _applyEnv(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = _getEnv(subKey);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      _applyEnv(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
  return obj;
}
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

const _assets = {

};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

storage.mount('/assets', assets$1);

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const key = await opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: $fetch.raw,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function trapUnhandledNodeErrors() {
  {
    process.on(
      "unhandledRejection",
      (err) => console.error("[nitro] [unhandledRejection] " + err)
    );
    process.on(
      "uncaughtException",
      (err) => console.error("[nitro]  [uncaughtException] " + err)
    );
  }
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (event.handled) {
    return;
  }
  setResponseStatus(event, errorObject.statusCode !== 200 && errorObject.statusCode || 500, errorObject.statusMessage);
  if (isJsonRequest(event)) {
    setResponseHeader(event, "Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('../error-500.mjs');
    if (event.handled) {
      return;
    }
    setResponseHeader(event, "Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  const html = await res.text();
  if (event.handled) {
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  setResponseStatus(event, res.status && res.status !== 200 ? res.status : void 0, res.statusText);
  event.node.res.end(html);
});

const assets = {
  "/_nuxt/default.68bd0424.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"f6-at9nPd5RNnv5o8pqr98AMFSoWr8\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 246,
    "path": "../public/_nuxt/default.68bd0424.css"
  },
  "/_nuxt/default.a335f39c.js": {
    "type": "application/javascript",
    "etag": "\"56ab-QMtZbGaOV3v7kYkW1TK8b5tNsDc\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 22187,
    "path": "../public/_nuxt/default.a335f39c.js"
  },
  "/_nuxt/entry.79121f57.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"274d-N4IvrOydMIuBnRd8tSDmjhVoR9M\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 10061,
    "path": "../public/_nuxt/entry.79121f57.css"
  },
  "/_nuxt/entry.fd18f137.js": {
    "type": "application/javascript",
    "etag": "\"2af41-6pYroBEBL/ds6c8KYswZHb9DLDA\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 175937,
    "path": "../public/_nuxt/entry.fd18f137.js"
  },
  "/_nuxt/error-404.422205e3.js": {
    "type": "application/javascript",
    "etag": "\"1983-xooOzWz0XsL4vtdGdZhS+xb4NhQ\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 6531,
    "path": "../public/_nuxt/error-404.422205e3.js"
  },
  "/_nuxt/error-404.7fc72018.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"e2e-iNt1cqPQ0WDudfCTZVQd31BeRGs\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 3630,
    "path": "../public/_nuxt/error-404.7fc72018.css"
  },
  "/_nuxt/error-500.c5df6088.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"79e-ByRo+49BgcevWdRjJy3CMx2IA5k\"",
    "mtime": "2023-08-18T07:09:27.018Z",
    "size": 1950,
    "path": "../public/_nuxt/error-500.c5df6088.css"
  },
  "/_nuxt/error-500.f9dc31fc.js": {
    "type": "application/javascript",
    "etag": "\"756-VIFuZV+SxqN8WpzMbTeuRlEPauY\"",
    "mtime": "2023-08-18T07:09:27.018Z",
    "size": 1878,
    "path": "../public/_nuxt/error-500.f9dc31fc.js"
  },
  "/_nuxt/index.5ee9813c.js": {
    "type": "application/javascript",
    "etag": "\"189-9ovk228gkQCxtA7XBgg/jms6KCY\"",
    "mtime": "2023-08-18T07:09:27.018Z",
    "size": 393,
    "path": "../public/_nuxt/index.5ee9813c.js"
  },
  "/img/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"35a36-ojTQilQlI8D67J2EUT0Aw367MLk\"",
    "mtime": "2023-08-18T07:09:27.428Z",
    "size": 219702,
    "path": "../public/img/1.jpg"
  },
  "/img/10.png": {
    "type": "image/png",
    "etag": "\"130b-1YkauLvPMi5ZPVMxEcKB+lG74Og\"",
    "mtime": "2023-08-18T07:09:27.428Z",
    "size": 4875,
    "path": "../public/img/10.png"
  },
  "/img/11.png": {
    "type": "image/png",
    "etag": "\"149287-urxCt72rwYTl5Eh9dJYQ0FfG36o\"",
    "mtime": "2023-08-18T07:09:27.418Z",
    "size": 1348231,
    "path": "../public/img/11.png"
  },
  "/img/12.png": {
    "type": "image/png",
    "etag": "\"9e94-+i979qKWBuYdzVdeGVjZOIT/fMQ\"",
    "mtime": "2023-08-18T07:09:27.418Z",
    "size": 40596,
    "path": "../public/img/12.png"
  },
  "/img/13.png": {
    "type": "image/png",
    "etag": "\"fd2c-OVvBTTM3rOvLspAOfVFkCHMeEbs\"",
    "mtime": "2023-08-18T07:09:27.418Z",
    "size": 64812,
    "path": "../public/img/13.png"
  },
  "/img/14.png": {
    "type": "image/png",
    "etag": "\"102ba-6FRHHevl2SNy2nMht8WG2ZFiHzY\"",
    "mtime": "2023-08-18T07:09:27.408Z",
    "size": 66234,
    "path": "../public/img/14.png"
  },
  "/img/15.png": {
    "type": "image/png",
    "etag": "\"12137-etg0rZTkwniJbUhOluawRhlsKE0\"",
    "mtime": "2023-08-18T07:09:27.408Z",
    "size": 74039,
    "path": "../public/img/15.png"
  },
  "/img/16.jpg": {
    "type": "image/jpeg",
    "etag": "\"1563e-WvJXjGzNp0w0xn7AHyRQE5+CXBo\"",
    "mtime": "2023-08-18T07:09:27.408Z",
    "size": 87614,
    "path": "../public/img/16.jpg"
  },
  "/img/17.jpg": {
    "type": "image/jpeg",
    "etag": "\"150cf-mH8pu24oRvPkkceiNNJ0MfE9+V8\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 86223,
    "path": "../public/img/17.jpg"
  },
  "/img/18.jpg": {
    "type": "image/jpeg",
    "etag": "\"c622-HMyVSWCycAqnZqaWe+uS4gR1qWc\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 50722,
    "path": "../public/img/18.jpg"
  },
  "/img/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"11c51-/g0DGrhjd8Uf7LkQs+EL37v+x/U\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 72785,
    "path": "../public/img/2.jpg"
  },
  "/img/3.png": {
    "type": "image/png",
    "etag": "\"d928-kTcoaahOt/UXCgxzt+WqkxJyAMQ\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 55592,
    "path": "../public/img/3.png"
  },
  "/img/4.png": {
    "type": "image/png",
    "etag": "\"bba0-1Y2cYHM1OcuDMg5jTED/N9sBtb0\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 48032,
    "path": "../public/img/4.png"
  },
  "/img/404-new.svg": {
    "type": "image/svg+xml",
    "etag": "\"4868-Vd2eW0IXWh9i0McJ0u4ndaITWvA\"",
    "mtime": "2023-08-18T07:09:27.398Z",
    "size": 18536,
    "path": "../public/img/404-new.svg"
  },
  "/img/404.png": {
    "type": "image/png",
    "etag": "\"92e3-YjmciN7kC98XuIneS/+erdh+AIY\"",
    "mtime": "2023-08-18T07:09:27.388Z",
    "size": 37603,
    "path": "../public/img/404.png"
  },
  "/img/404.svg": {
    "type": "image/svg+xml",
    "etag": "\"4868-urHZCmUNuUPT5v8hQmQO1fnBF9w\"",
    "mtime": "2023-08-18T07:09:27.388Z",
    "size": 18536,
    "path": "../public/img/404.svg"
  },
  "/img/5.jpg": {
    "type": "image/jpeg",
    "etag": "\"415ae-7OUcsPjX+KQqGBMQmZQqqeE2tz4\"",
    "mtime": "2023-08-18T07:09:27.388Z",
    "size": 267694,
    "path": "../public/img/5.jpg"
  },
  "/img/6.png": {
    "type": "image/png",
    "etag": "\"26662-hEomgiml3aMz99j6PKE3gW52OSE\"",
    "mtime": "2023-08-18T07:09:27.378Z",
    "size": 157282,
    "path": "../public/img/6.png"
  },
  "/img/7.jpg": {
    "type": "image/jpeg",
    "etag": "\"2acf1-2ZkWgiETFvTSqMK4uNoV2dBZ44A\"",
    "mtime": "2023-08-18T07:09:27.378Z",
    "size": 175345,
    "path": "../public/img/7.jpg"
  },
  "/img/8.jpg": {
    "type": "image/jpeg",
    "etag": "\"26aec-9A9axXJGm31mPbd1jWVHQchviQo\"",
    "mtime": "2023-08-18T07:09:27.368Z",
    "size": 158444,
    "path": "../public/img/8.jpg"
  },
  "/img/8.png": {
    "type": "image/png",
    "etag": "\"1432-UAmF2ad1Uw9s8fgoO8qUW/3Ykj8\"",
    "mtime": "2023-08-18T07:09:27.368Z",
    "size": 5170,
    "path": "../public/img/8.png"
  },
  "/img/9.jpg": {
    "type": "image/jpeg",
    "etag": "\"cf145-TgsenGT9Vpz4JvJk5MR3rDx0miE\"",
    "mtime": "2023-08-18T07:09:27.368Z",
    "size": 848197,
    "path": "../public/img/9.jpg"
  },
  "/img/9.png": {
    "type": "image/png",
    "etag": "\"19044-sbZ0WcBnzBqSokD6Ljo9dF7Ef90\"",
    "mtime": "2023-08-18T07:09:27.358Z",
    "size": 102468,
    "path": "../public/img/9.png"
  },
  "/img/avatar.png": {
    "type": "image/png",
    "etag": "\"545-F1KpsuglbmaA285W8iRuY2leXOI\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 1349,
    "path": "../public/img/avatar.png"
  },
  "/img/da-dang-ky.png": {
    "type": "image/png",
    "etag": "\"14ce-xDT1Rz5M2uQ9JVHg2QaUMVY98tQ\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 5326,
    "path": "../public/img/da-dang-ky.png"
  },
  "/img/da-thong-bao.png": {
    "type": "image/png",
    "etag": "\"185e-OkFJimLq88ON1AqBJNwIPMsgJ+M\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 6238,
    "path": "../public/img/da-thong-bao.png"
  },
  "/img/favicon.png": {
    "type": "image/png",
    "etag": "\"6ec-tCuUN2giwXvrhM9GYd7PscWqwTw\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 1772,
    "path": "../public/img/favicon.png"
  },
  "/img/highlights.png": {
    "type": "image/png",
    "etag": "\"4a6e9-TQdqb84nq83slCF4DhelLHLt2xM\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 304873,
    "path": "../public/img/highlights.png"
  },
  "/img/lecturers-avatar.png": {
    "type": "image/png",
    "etag": "\"15f70-TJbDVFfqmndeEKzFAyp/KPZkOrM\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 89968,
    "path": "../public/img/lecturers-avatar.png"
  },
  "/img/logo-footer-mobiedu-30.png": {
    "type": "image/png",
    "etag": "\"3cc8-t5PMYnj9U5FpZSfepfO0WeBIkyo\"",
    "mtime": "2023-08-18T07:09:27.108Z",
    "size": 15560,
    "path": "../public/img/logo-footer-mobiedu-30.png"
  },
  "/img/logo.png": {
    "type": "image/png",
    "etag": "\"d68-f9tluc+JsagzRLc6SkrumMSyQ9E\"",
    "mtime": "2023-08-18T07:09:27.108Z",
    "size": 3432,
    "path": "../public/img/logo.png"
  },
  "/img/logo.svg": {
    "type": "image/svg+xml",
    "etag": "\"3afb-g7nHURuFt42+MLAdnzYInXKfMwQ\"",
    "mtime": "2023-08-18T07:09:27.108Z",
    "size": 15099,
    "path": "../public/img/logo.svg"
  },
  "/img/mobifone.png": {
    "type": "image/png",
    "etag": "\"b6d-uMh11zgVKWsKoaAhil3r/GhYhVA\"",
    "mtime": "2023-08-18T07:09:27.108Z",
    "size": 2925,
    "path": "../public/img/mobifone.png"
  },
  "/img/mschool.png": {
    "type": "image/png",
    "etag": "\"fb2-q1SeavaceznEgj+VQQ3ZPdcqQBM\"",
    "mtime": "2023-08-18T07:09:27.108Z",
    "size": 4018,
    "path": "../public/img/mschool.png"
  },
  "/img/qr-code.png": {
    "type": "image/png",
    "etag": "\"2db8-1e6Uy7VG93fBRsR327BNTjLAAgc\"",
    "mtime": "2023-08-18T07:09:27.068Z",
    "size": 11704,
    "path": "../public/img/qr-code.png"
  },
  "/img/review-avatar.png": {
    "type": "image/png",
    "etag": "\"512-mu0jTMfn5TDHXg+RRf8pqAXZfK0\"",
    "mtime": "2023-08-18T07:09:27.068Z",
    "size": 1298,
    "path": "../public/img/review-avatar.png"
  },
  "/img/teacher.png": {
    "type": "image/png",
    "etag": "\"38bc3-kEGDBKwrh9nMTe2eSeoDyWgRRhU\"",
    "mtime": "2023-08-18T07:09:27.058Z",
    "size": 232387,
    "path": "../public/img/teacher.png"
  },
  "/img/video.mp4": {
    "type": "video/mp4",
    "etag": "\"8ebc68-iTib8RPxGzSKuw01sGev3U5gyTc\"",
    "mtime": "2023-08-18T07:09:27.058Z",
    "size": 9354344,
    "path": "../public/img/video.mp4"
  },
  "/img/voucher.svg": {
    "type": "image/svg+xml",
    "etag": "\"adf-9u/J+F3RAV/M7ahgxLeGZs+waCk\"",
    "mtime": "2023-08-18T07:09:27.028Z",
    "size": 2783,
    "path": "../public/img/voucher.svg"
  },
  "/img/about/cong-thi.svg": {
    "type": "image/svg+xml",
    "etag": "\"b1e-17jk2kugSONpkzs6JXsLamh3lIg\"",
    "mtime": "2023-08-18T07:09:27.358Z",
    "size": 2846,
    "path": "../public/img/about/cong-thi.svg"
  },
  "/img/about/giai-phap.svg": {
    "type": "image/svg+xml",
    "etag": "\"89d-SffQ7HH0QWcJnJDKZ/camUDBu5g\"",
    "mtime": "2023-08-18T07:09:27.358Z",
    "size": 2205,
    "path": "../public/img/about/giai-phap.svg"
  },
  "/img/about/v-m-1.jpg": {
    "type": "image/jpeg",
    "etag": "\"1da86-ir7jAijUIPkr5afYPQrUew2eSMY\"",
    "mtime": "2023-08-18T07:09:27.358Z",
    "size": 121478,
    "path": "../public/img/about/v-m-1.jpg"
  },
  "/img/about/v-m-2.jpg": {
    "type": "image/jpeg",
    "etag": "\"1f867-oqQnlUGg7iuPlOfQKezugXIyWcw\"",
    "mtime": "2023-08-18T07:09:27.358Z",
    "size": 129127,
    "path": "../public/img/about/v-m-2.jpg"
  },
  "/img/about/v-m-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"198d1-HNkGmJDW1/pzHy+bYU5EIJBo+c4\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 104657,
    "path": "../public/img/about/v-m-3.jpg"
  },
  "/img/about/v-m-i1.svg": {
    "type": "image/svg+xml",
    "etag": "\"f3e-pdmHrBHUm9vTzNoJ/z0rIcN68kM\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 3902,
    "path": "../public/img/about/v-m-i1.svg"
  },
  "/img/about/v-m-i2.svg": {
    "type": "image/svg+xml",
    "etag": "\"fe0-WfCrZ1k/Bo0peDg/K9F1eo7kqhc\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 4064,
    "path": "../public/img/about/v-m-i2.svg"
  },
  "/img/about/v-m-i3.svg": {
    "type": "image/svg+xml",
    "etag": "\"e7b-jg/+i58/LfSEeV9PuM3sQcG7PGc\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 3707,
    "path": "../public/img/about/v-m-i3.svg"
  },
  "/img/bank/scb.png": {
    "type": "image/png",
    "etag": "\"5d9-Bne1ZsChMRkwT9jm7XWIfQu9wQQ\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 1497,
    "path": "../public/img/bank/scb.png"
  },
  "/img/bank/tpb.png": {
    "type": "image/png",
    "etag": "\"63c-IaYIM6kuCOVj3EFskawUVo7wNCg\"",
    "mtime": "2023-08-18T07:09:27.348Z",
    "size": 1596,
    "path": "../public/img/bank/tpb.png"
  },
  "/img/bank/vcb.png": {
    "type": "image/png",
    "etag": "\"892-Duj7neBrVS+m6Y7Age4UwBihXdg\"",
    "mtime": "2023-08-18T07:09:27.338Z",
    "size": 2194,
    "path": "../public/img/bank/vcb.png"
  },
  "/img/banner/banner-about-desktop.jpg": {
    "type": "image/jpeg",
    "etag": "\"60a9e-uPH9aAKaGCd6k70mxjjVR2pPQG4\"",
    "mtime": "2023-08-18T07:09:27.338Z",
    "size": 395934,
    "path": "../public/img/banner/banner-about-desktop.jpg"
  },
  "/img/banner/banner-about-mobile.jpg": {
    "type": "image/jpeg",
    "etag": "\"1a5b8-GOu1aLiBj4sD78zzA3mTTd6zBCE\"",
    "mtime": "2023-08-18T07:09:27.338Z",
    "size": 107960,
    "path": "../public/img/banner/banner-about-mobile.jpg"
  },
  "/img/banner/banner-course.jpg": {
    "type": "image/jpeg",
    "etag": "\"52f9b-KyVrmh1VQ/bMd5xmOwRTxil8/10\"",
    "mtime": "2023-08-18T07:09:27.328Z",
    "size": 339867,
    "path": "../public/img/banner/banner-course.jpg"
  },
  "/img/banner/banner-dashboard.jpg": {
    "type": "image/jpeg",
    "etag": "\"10cbc-kzgSr599nq8uxe7YdrvtHBNTjOs\"",
    "mtime": "2023-08-18T07:09:27.328Z",
    "size": 68796,
    "path": "../public/img/banner/banner-dashboard.jpg"
  },
  "/img/banner/banner-exam-desktop.jpg": {
    "type": "image/jpeg",
    "etag": "\"3326d-CXfcILKh/Qbd2shgVzwmI92PLrs\"",
    "mtime": "2023-08-18T07:09:27.328Z",
    "size": 209517,
    "path": "../public/img/banner/banner-exam-desktop.jpg"
  },
  "/img/banner/banner-exam-mobile.png": {
    "type": "image/png",
    "etag": "\"29adb-+hm/oAgrVSQFuBgFNev2OVv+sIA\"",
    "mtime": "2023-08-18T07:09:27.318Z",
    "size": 170715,
    "path": "../public/img/banner/banner-exam-mobile.png"
  },
  "/img/banner/banner-lecturers.png": {
    "type": "image/png",
    "etag": "\"6b441-Ksh/zid11xJ41qnlfrNjEz1qiuc\"",
    "mtime": "2023-08-18T07:09:27.318Z",
    "size": 439361,
    "path": "../public/img/banner/banner-lecturers.png"
  },
  "/img/banner/banner-qc.jpg": {
    "type": "image/jpeg",
    "etag": "\"19a72-/5OrZmMcAaUgX4jzprlPU4/s8HU\"",
    "mtime": "2023-08-18T07:09:27.308Z",
    "size": 105074,
    "path": "../public/img/banner/banner-qc.jpg"
  },
  "/img/banner/banner-solution-desktop.jpg": {
    "type": "image/jpeg",
    "etag": "\"4d925-9ucb4Mv2n287BFilPKbSvEEoHGM\"",
    "mtime": "2023-08-18T07:09:27.308Z",
    "size": 317733,
    "path": "../public/img/banner/banner-solution-desktop.jpg"
  },
  "/img/banner/banner-solution-mobile.jpg": {
    "type": "image/jpeg",
    "etag": "\"1e9dd-Dz5dP9Mdiw59VXrxHl7cTSbgMy0\"",
    "mtime": "2023-08-18T07:09:27.308Z",
    "size": 125405,
    "path": "../public/img/banner/banner-solution-mobile.jpg"
  },
  "/img/bg/bg-banner-mobile.png": {
    "type": "image/png",
    "etag": "\"11782-MszfzfQp4/lo8qdx0tM3SVPFae0\"",
    "mtime": "2023-08-18T07:09:27.298Z",
    "size": 71554,
    "path": "../public/img/bg/bg-banner-mobile.png"
  },
  "/img/bg/bg-banner.jpg": {
    "type": "image/jpeg",
    "etag": "\"22ef3-b9z7h/ZAUfMouAz2cswVg306jNo\"",
    "mtime": "2023-08-18T07:09:27.298Z",
    "size": 143091,
    "path": "../public/img/bg/bg-banner.jpg"
  },
  "/img/bg/bg-cta-email.png": {
    "type": "image/png",
    "etag": "\"973e-aolMeXHD1mlnWa0CgWpsVZ97I0E\"",
    "mtime": "2023-08-18T07:09:27.298Z",
    "size": 38718,
    "path": "../public/img/bg/bg-cta-email.png"
  },
  "/img/bg/bg-customer.png": {
    "type": "image/png",
    "etag": "\"1f12-6GwxayKk3Usy/OdTPkhaVuyUaHM\"",
    "mtime": "2023-08-18T07:09:27.298Z",
    "size": 7954,
    "path": "../public/img/bg/bg-customer.png"
  },
  "/img/bg/bg-deal-mobile.png": {
    "type": "image/png",
    "etag": "\"35a0e-DWmLHYvAUBnzgd0XrESA4edVMAk\"",
    "mtime": "2023-08-18T07:09:27.298Z",
    "size": 219662,
    "path": "../public/img/bg/bg-deal-mobile.png"
  },
  "/img/bg/bg-deal.png": {
    "type": "image/png",
    "etag": "\"a8d4f-Tr3wr60EGGklMqhd7nZEo/YCoLA\"",
    "mtime": "2023-08-18T07:09:27.278Z",
    "size": 691535,
    "path": "../public/img/bg/bg-deal.png"
  },
  "/img/bg/bg-deal2-mobile.png": {
    "type": "image/png",
    "etag": "\"47ae4-1dL0mZ4+80qEcTX9LsXrw7Pj9eU\"",
    "mtime": "2023-08-18T07:09:27.278Z",
    "size": 293604,
    "path": "../public/img/bg/bg-deal2-mobile.png"
  },
  "/img/bg/bg-deal2.png": {
    "type": "image/png",
    "etag": "\"b0f7a-O3LcuyaAbEx/0ud9RBsI9hAr5/A\"",
    "mtime": "2023-08-18T07:09:27.268Z",
    "size": 724858,
    "path": "../public/img/bg/bg-deal2.png"
  },
  "/img/bg/bg-footer.png": {
    "type": "image/png",
    "etag": "\"1fa7-DOiYcAo0dTG3sRVY5pp2PvcOPdw\"",
    "mtime": "2023-08-18T07:09:27.268Z",
    "size": 8103,
    "path": "../public/img/bg/bg-footer.png"
  },
  "/img/bg/bg-home-2.png": {
    "type": "image/png",
    "etag": "\"275d-uZbv8tqmeT+BTjdWC/6L9iaIc2I\"",
    "mtime": "2023-08-18T07:09:27.268Z",
    "size": 10077,
    "path": "../public/img/bg/bg-home-2.png"
  },
  "/img/bg/bg-home-3.png": {
    "type": "image/png",
    "etag": "\"2243-000nCqappca1GaDDNtDdYusnLhw\"",
    "mtime": "2023-08-18T07:09:27.258Z",
    "size": 8771,
    "path": "../public/img/bg/bg-home-3.png"
  },
  "/img/bg/bg-home-4.png": {
    "type": "image/png",
    "etag": "\"421a0-P3P0xHx+o3Djk0rrTAFBcjd7YnE\"",
    "mtime": "2023-08-18T07:09:27.258Z",
    "size": 270752,
    "path": "../public/img/bg/bg-home-4.png"
  },
  "/img/bg/bg-home-5-2.png": {
    "type": "image/png",
    "etag": "\"7b01c-QwhNbmxx2b/BTbxeU41sp30JFOM\"",
    "mtime": "2023-08-18T07:09:27.258Z",
    "size": 503836,
    "path": "../public/img/bg/bg-home-5-2.png"
  },
  "/img/bg/bg-home-5.png": {
    "type": "image/png",
    "etag": "\"6c698-LtINqwBYpQkIXqL536KHiL99jQw\"",
    "mtime": "2023-08-18T07:09:27.248Z",
    "size": 444056,
    "path": "../public/img/bg/bg-home-5.png"
  },
  "/img/bg/bg-m-profile.png": {
    "type": "image/png",
    "etag": "\"8c24-Gmbj5ucfa+PJllRPce96fNo//aU\"",
    "mtime": "2023-08-18T07:09:27.248Z",
    "size": 35876,
    "path": "../public/img/bg/bg-m-profile.png"
  },
  "/img/bg/bg-mobile.png": {
    "type": "image/png",
    "etag": "\"307bb-z9IX2W/HlqzaJIfUh9d+SJHvEqk\"",
    "mtime": "2023-08-18T07:09:27.238Z",
    "size": 198587,
    "path": "../public/img/bg/bg-mobile.png"
  },
  "/img/bg/bg-profile.png": {
    "type": "image/png",
    "etag": "\"8ea0-Ohq5wrY1g7qPSeQg+Mod7ZtGRns\"",
    "mtime": "2023-08-18T07:09:27.238Z",
    "size": 36512,
    "path": "../public/img/bg/bg-profile.png"
  },
  "/img/bg/bg-solution-4-desktop.png": {
    "type": "image/png",
    "etag": "\"32574-Gy1V6mMbL3GA/XItC1URbioXaHc\"",
    "mtime": "2023-08-18T07:09:27.238Z",
    "size": 206196,
    "path": "../public/img/bg/bg-solution-4-desktop.png"
  },
  "/img/bg/bg-solution-4-mobile.png": {
    "type": "image/png",
    "etag": "\"156de-iDQqmYcvDpl+fOh3Gg8QcYbMzvU\"",
    "mtime": "2023-08-18T07:09:27.228Z",
    "size": 87774,
    "path": "../public/img/bg/bg-solution-4-mobile.png"
  },
  "/img/bg/bg-solution-7.png": {
    "type": "image/png",
    "etag": "\"30153-NJKsc03AzcCH0esiW67Atl1y3RQ\"",
    "mtime": "2023-08-18T07:09:27.228Z",
    "size": 196947,
    "path": "../public/img/bg/bg-solution-7.png"
  },
  "/img/bg/bg-teachers-3.jpg": {
    "type": "image/jpeg",
    "etag": "\"146b9-PDcuHifCJPIzZ4BP+MK6crlEGjQ\"",
    "mtime": "2023-08-18T07:09:27.228Z",
    "size": 83641,
    "path": "../public/img/bg/bg-teachers-3.jpg"
  },
  "/img/cart/delete.svg": {
    "type": "image/svg+xml",
    "etag": "\"184-uLtgBxb+uebhebsmR23u2bQRYdA\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 388,
    "path": "../public/img/cart/delete.svg"
  },
  "/img/cart/shopping-cart.svg": {
    "type": "image/svg+xml",
    "etag": "\"3fd-JDsNjNeBUontUd5iW+rLiTznguM\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 1021,
    "path": "../public/img/cart/shopping-cart.svg"
  },
  "/img/cart/star.svg": {
    "type": "image/svg+xml",
    "etag": "\"eb-lQR5tHWcvjZiEFf1d4pyACNSjLc\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 235,
    "path": "../public/img/cart/star.svg"
  },
  "/img/course/PDF.svg": {
    "type": "image/svg+xml",
    "etag": "\"787-f+wQpf27w497mSZqQARxsKUZ1Sg\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 1927,
    "path": "../public/img/course/PDF.svg"
  },
  "/img/course/choseOption.svg": {
    "type": "image/svg+xml",
    "etag": "\"232-afNeLle+1OryyxXhjTFoJb6Qi70\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 562,
    "path": "../public/img/course/choseOption.svg"
  },
  "/img/course/courseVideo.svg": {
    "type": "image/svg+xml",
    "etag": "\"247-P5oYjG4xAeS0v3JKdizzkGgQA3w\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 583,
    "path": "../public/img/course/courseVideo.svg"
  },
  "/img/course/courseVideo_white.svg": {
    "type": "image/svg+xml",
    "etag": "\"248-3fghifh1PZZWT7kh0as7cQR0nHs\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 584,
    "path": "../public/img/course/courseVideo_white.svg"
  },
  "/img/course/defaultAvatar.svg": {
    "type": "image/svg+xml",
    "etag": "\"763-LFEpCf1tan5qM0iSnQ+tUu/JQYg\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 1891,
    "path": "../public/img/course/defaultAvatar.svg"
  },
  "/img/course/docx.svg": {
    "type": "image/svg+xml",
    "etag": "\"551-lE1KNziy9B+aHNOM5Iqy2ckClPc\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 1361,
    "path": "../public/img/course/docx.svg"
  },
  "/img/course/excel.svg": {
    "type": "image/svg+xml",
    "etag": "\"466-5aiWvah0CWOgIHMJXrrn+s5WkIg\"",
    "mtime": "2023-08-18T07:09:27.208Z",
    "size": 1126,
    "path": "../public/img/course/excel.svg"
  },
  "/img/course/img.jpg": {
    "type": "image/jpeg",
    "etag": "\"73670-ipcNZMWHyizJ9mS/I1lK4I0Zzqs\"",
    "mtime": "2023-08-18T07:09:27.198Z",
    "size": 472688,
    "path": "../public/img/course/img.jpg"
  },
  "/img/course/noFile.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ead-26Y9BIj48mdro0AR1wKr6uBh1wE\"",
    "mtime": "2023-08-18T07:09:27.198Z",
    "size": 7853,
    "path": "../public/img/course/noFile.svg"
  },
  "/img/course/playBtn.svg": {
    "type": "image/svg+xml",
    "etag": "\"105-kSFLhWfEk7QzQ/jpDmQ4dal9/NQ\"",
    "mtime": "2023-08-18T07:09:27.198Z",
    "size": 261,
    "path": "../public/img/course/playBtn.svg"
  },
  "/img/course/selectOption.svg": {
    "type": "image/svg+xml",
    "etag": "\"300-H0TsYAeBPHUz4X6SXYaqFoZ0Wmc\"",
    "mtime": "2023-08-18T07:09:27.198Z",
    "size": 768,
    "path": "../public/img/course/selectOption.svg"
  },
  "/img/course/warning.svg": {
    "type": "image/svg+xml",
    "etag": "\"632-Ht3Eh2yIMFHuErCKOIlz4PEvTiw\"",
    "mtime": "2023-08-18T07:09:27.198Z",
    "size": 1586,
    "path": "../public/img/course/warning.svg"
  },
  "/img/favicon/android-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"cc1-lsPKc7XA5i9+1jOnSXf7WjUH2nE\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 3265,
    "path": "../public/img/favicon/android-icon-144x144.png"
  },
  "/img/favicon/android-icon-192x192.png": {
    "type": "image/png",
    "etag": "\"f63-oHopqpSuqh7mbEAo1fSloBA2z78\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 3939,
    "path": "../public/img/favicon/android-icon-192x192.png"
  },
  "/img/favicon/android-icon-36x36.png": {
    "type": "image/png",
    "etag": "\"4ae-Ui6ThTvhWbDfUcMqrQg8v2P+D98\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 1198,
    "path": "../public/img/favicon/android-icon-36x36.png"
  },
  "/img/favicon/android-icon-48x48.png": {
    "type": "image/png",
    "etag": "\"58d-Ffc+G0JK62ttTxnoOmEJU4ivw9g\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 1421,
    "path": "../public/img/favicon/android-icon-48x48.png"
  },
  "/img/favicon/android-icon-72x72.png": {
    "type": "image/png",
    "etag": "\"68c-4vlyEBhHq1pGlx5qpe6XRE5rj0I\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 1676,
    "path": "../public/img/favicon/android-icon-72x72.png"
  },
  "/img/favicon/android-icon-96x96.png": {
    "type": "image/png",
    "etag": "\"82d-4A+/XyCRUxm/boiJg2FVQmumJZs\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 2093,
    "path": "../public/img/favicon/android-icon-96x96.png"
  },
  "/img/favicon/apple-icon-114x114.png": {
    "type": "image/png",
    "etag": "\"8d0-1Xgn3j1O0+UC0Bg8kSSgiKfu2PE\"",
    "mtime": "2023-08-18T07:09:27.188Z",
    "size": 2256,
    "path": "../public/img/favicon/apple-icon-114x114.png"
  },
  "/img/favicon/apple-icon-120x120.png": {
    "type": "image/png",
    "etag": "\"9ed-BhYXYCA6XAU/HdTkXmtBuFtd/O8\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 2541,
    "path": "../public/img/favicon/apple-icon-120x120.png"
  },
  "/img/favicon/apple-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"cc1-lsPKc7XA5i9+1jOnSXf7WjUH2nE\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 3265,
    "path": "../public/img/favicon/apple-icon-144x144.png"
  },
  "/img/favicon/apple-icon-152x152.png": {
    "type": "image/png",
    "etag": "\"cc8-JskgKlFmRepb/Yc98Qcv/LYbusM\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 3272,
    "path": "../public/img/favicon/apple-icon-152x152.png"
  },
  "/img/favicon/apple-icon-180x180.png": {
    "type": "image/png",
    "etag": "\"10d6-WlTnzJQ+4qTuE2uINGzyqz/TD3Y\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 4310,
    "path": "../public/img/favicon/apple-icon-180x180.png"
  },
  "/img/favicon/apple-icon-57x57.png": {
    "type": "image/png",
    "etag": "\"5a0-nYZ9lPYPVWiwG4YxCqAw3di4Cc0\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 1440,
    "path": "../public/img/favicon/apple-icon-57x57.png"
  },
  "/img/favicon/apple-icon-60x60.png": {
    "type": "image/png",
    "etag": "\"601-ucmwBY9O8AmNZ0VZuP+7lDNNa/k\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 1537,
    "path": "../public/img/favicon/apple-icon-60x60.png"
  },
  "/img/favicon/apple-icon-72x72.png": {
    "type": "image/png",
    "etag": "\"68c-4vlyEBhHq1pGlx5qpe6XRE5rj0I\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 1676,
    "path": "../public/img/favicon/apple-icon-72x72.png"
  },
  "/img/favicon/apple-icon-76x76.png": {
    "type": "image/png",
    "etag": "\"795-/l9DWMUhxZQWqCrOVSngwpjruYI\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 1941,
    "path": "../public/img/favicon/apple-icon-76x76.png"
  },
  "/img/favicon/apple-icon-precomposed.png": {
    "type": "image/png",
    "etag": "\"116c-kNAou0PDWlLA+GTnIHxxG5hElUQ\"",
    "mtime": "2023-08-18T07:09:27.178Z",
    "size": 4460,
    "path": "../public/img/favicon/apple-icon-precomposed.png"
  },
  "/img/favicon/apple-icon.png": {
    "type": "image/png",
    "etag": "\"116c-kNAou0PDWlLA+GTnIHxxG5hElUQ\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 4460,
    "path": "../public/img/favicon/apple-icon.png"
  },
  "/img/favicon/browserconfig.xml": {
    "type": "application/xml",
    "etag": "\"11a-zljse1QKxhJiJjnzFuJFYMwAJ3g\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 282,
    "path": "../public/img/favicon/browserconfig.xml"
  },
  "/img/favicon/favicon-16x16.png": {
    "type": "image/png",
    "etag": "\"330-7A12qE0ieJLkoFB+CBl55P+PjQ8\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 816,
    "path": "../public/img/favicon/favicon-16x16.png"
  },
  "/img/favicon/favicon-32x32.png": {
    "type": "image/png",
    "etag": "\"42f-O8NwEouQdmP6rUCSv3EIUhGChuY\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 1071,
    "path": "../public/img/favicon/favicon-32x32.png"
  },
  "/img/favicon/favicon-96x96.png": {
    "type": "image/png",
    "etag": "\"82d-hEF7a4FVLQRX64hXLEIaLRuh2yw\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 2093,
    "path": "../public/img/favicon/favicon-96x96.png"
  },
  "/img/favicon/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"47e-W7KHb2J+t8p9Fb2IFvHEXPN3aFc\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 1150,
    "path": "../public/img/favicon/favicon.ico"
  },
  "/img/favicon/manifest.json": {
    "type": "application/json",
    "etag": "\"2f8-BxA4lEkAAJP2aMOfXFw5VolG3wo\"",
    "mtime": "2023-08-18T07:09:27.168Z",
    "size": 760,
    "path": "../public/img/favicon/manifest.json"
  },
  "/img/favicon/ms-icon-144x144.png": {
    "type": "image/png",
    "etag": "\"cc1-lsPKc7XA5i9+1jOnSXf7WjUH2nE\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 3265,
    "path": "../public/img/favicon/ms-icon-144x144.png"
  },
  "/img/favicon/ms-icon-150x150.png": {
    "type": "image/png",
    "etag": "\"d59-Ki86Hj/GhFjp4+psvU5Pr2CrIRY\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 3417,
    "path": "../public/img/favicon/ms-icon-150x150.png"
  },
  "/img/favicon/ms-icon-310x310.png": {
    "type": "image/png",
    "etag": "\"215a-Vk9NteGxtDUCdj3kYoe24dayhQE\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 8538,
    "path": "../public/img/favicon/ms-icon-310x310.png"
  },
  "/img/favicon/ms-icon-70x70.png": {
    "type": "image/png",
    "etag": "\"6b5-6nlffqniYFqzRF73QGbI5umxjx0\"",
    "mtime": "2023-08-18T07:09:27.158Z",
    "size": 1717,
    "path": "../public/img/favicon/ms-icon-70x70.png"
  },
  "/img/icon/app-gallery.png": {
    "type": "image/png",
    "etag": "\"27a-KjhLuyVh8U/Z+MBdbwrksSJx9AM\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 634,
    "path": "../public/img/icon/app-gallery.png"
  },
  "/img/icon/app-store.png": {
    "type": "image/png",
    "etag": "\"268-r2ldKn5aPG1iRB0CNXTVLFbYHBk\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 616,
    "path": "../public/img/icon/app-store.png"
  },
  "/img/icon/bank-plus.png": {
    "type": "image/png",
    "etag": "\"2f4-5KHZxd/ujbm8XK7dBv+5hwLNdO8\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 756,
    "path": "../public/img/icon/bank-plus.png"
  },
  "/img/icon/benefit-icon.png": {
    "type": "image/png",
    "etag": "\"294-QTUO85tvwOv483aNGUPiT5lbLNw\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 660,
    "path": "../public/img/icon/benefit-icon.png"
  },
  "/img/icon/book-info.svg": {
    "type": "image/svg+xml",
    "etag": "\"5e8-0ZIxJW9RG75h1p/1G4DPpBK86Oc\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 1512,
    "path": "../public/img/icon/book-info.svg"
  },
  "/img/icon/bookmark.svg": {
    "type": "image/svg+xml",
    "etag": "\"1ec-BygquLpDCbY39LOildIpFQSeJ+Y\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 492,
    "path": "../public/img/icon/bookmark.svg"
  },
  "/img/icon/comment-question.svg": {
    "type": "image/svg+xml",
    "etag": "\"501-kCfQ7k3ZlPD3m4q8+R2LK/2zWVA\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 1281,
    "path": "../public/img/icon/comment-question.svg"
  },
  "/img/icon/document-edit.svg": {
    "type": "image/svg+xml",
    "etag": "\"8c3-edqkX6OR74HS72HqrkfiMoxFxaA\"",
    "mtime": "2023-08-18T07:09:27.148Z",
    "size": 2243,
    "path": "../public/img/icon/document-edit.svg"
  },
  "/img/icon/education-2.png": {
    "type": "image/png",
    "etag": "\"92c-6IbBSQNzUn8HGs9xKidgSf2rUcU\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 2348,
    "path": "../public/img/icon/education-2.png"
  },
  "/img/icon/education.png": {
    "type": "image/png",
    "etag": "\"2a6-CS216abcussYBlwlt5oPy6iiMOA\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 678,
    "path": "../public/img/icon/education.png"
  },
  "/img/icon/email_popup.png": {
    "type": "image/png",
    "etag": "\"6a0-fE2rkpNKWB16ZdKiNU89QXTKhck\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 1696,
    "path": "../public/img/icon/email_popup.png"
  },
  "/img/icon/exclamation.png": {
    "type": "image/png",
    "etag": "\"29c-tEbdg4OA+m0c7Kkani4z/vyFTqo\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 668,
    "path": "../public/img/icon/exclamation.png"
  },
  "/img/icon/facebook.png": {
    "type": "image/png",
    "etag": "\"181-c/CQ+9PoqURVm0/oNGtAB2pwa3U\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 385,
    "path": "../public/img/icon/facebook.png"
  },
  "/img/icon/field_signin.png": {
    "type": "image/png",
    "etag": "\"298-NyU2T2ZfTtV4Xse0f83v9uNYZnc\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 664,
    "path": "../public/img/icon/field_signin.png"
  },
  "/img/icon/google-play.png": {
    "type": "image/png",
    "etag": "\"295-fuHGxW52We9Z1jp58tNkk1teyBI\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 661,
    "path": "../public/img/icon/google-play.png"
  },
  "/img/icon/google.png": {
    "type": "image/png",
    "etag": "\"2ba-yp7Bwyfm3VwU6PfC1ZCerzM1R3Y\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 698,
    "path": "../public/img/icon/google.png"
  },
  "/img/icon/hotline.png": {
    "type": "image/png",
    "etag": "\"1e6-5h0Xd3KfPjQKhcvzlrEI6CaixiU\"",
    "mtime": "2023-08-18T07:09:27.138Z",
    "size": 486,
    "path": "../public/img/icon/hotline.png"
  },
  "/img/icon/i1.png": {
    "type": "image/png",
    "etag": "\"7ab-BLPcsAoBdAXz9pNcuBJJCh5RqJw\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 1963,
    "path": "../public/img/icon/i1.png"
  },
  "/img/icon/i2.png": {
    "type": "image/png",
    "etag": "\"510-+9aqI/51TYEBw6eCXcmgwkDwJic\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 1296,
    "path": "../public/img/icon/i2.png"
  },
  "/img/icon/i3.png": {
    "type": "image/png",
    "etag": "\"454-6NhTweUQbm8toG+UMp8KJwQlttU\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 1108,
    "path": "../public/img/icon/i3.png"
  },
  "/img/icon/i4.png": {
    "type": "image/png",
    "etag": "\"62b-OeFb6+1bbW7z5aetgzPhKLk2wi8\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 1579,
    "path": "../public/img/icon/i4.png"
  },
  "/img/icon/mess.png": {
    "type": "image/png",
    "etag": "\"a84-ZNzCW6iVhz0ANOf2tdkrWi6MmhU\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 2692,
    "path": "../public/img/icon/mess.png"
  },
  "/img/icon/momo.png": {
    "type": "image/png",
    "etag": "\"420-AtReTZiLnFCAmiR1fnvcRlFgIhE\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 1056,
    "path": "../public/img/icon/momo.png"
  },
  "/img/icon/no-results-found.png": {
    "type": "image/png",
    "etag": "\"22ba-T30qHHa+FHvU3MuU026pw2Ynt50\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 8890,
    "path": "../public/img/icon/no-results-found.png"
  },
  "/img/icon/shield.png": {
    "type": "image/png",
    "etag": "\"3a5-Ps+9Vqz/B8jpbfq4kgm36K0czdM\"",
    "mtime": "2023-08-18T07:09:27.128Z",
    "size": 933,
    "path": "../public/img/icon/shield.png"
  },
  "/img/icon/video-play.svg": {
    "type": "image/svg+xml",
    "etag": "\"570-j9ftuv5EK5xzDaq4hG802yRT9lY\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 1392,
    "path": "../public/img/icon/video-play.svg"
  },
  "/img/icon/works.png": {
    "type": "image/png",
    "etag": "\"315-fLjJA4HBy8B+VsscmjfBEvYBMsY\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 789,
    "path": "../public/img/icon/works.png"
  },
  "/img/icon/youtube.png": {
    "type": "image/png",
    "etag": "\"176-G0bRj+A55y3K+PV1PawpRyoLBGg\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 374,
    "path": "../public/img/icon/youtube.png"
  },
  "/img/icon/zalo-30.png": {
    "type": "image/png",
    "etag": "\"56e-TzjODRnz/0XFkrvaatKcsqmjnrA\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 1390,
    "path": "../public/img/icon/zalo-30.png"
  },
  "/img/icon/zalo-pay.png": {
    "type": "image/png",
    "etag": "\"392-Fv4W58SnAhEubv5OAWYZemXrbC0\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 914,
    "path": "../public/img/icon/zalo-pay.png"
  },
  "/img/icon/zalo.png": {
    "type": "image/png",
    "etag": "\"30d-nDi8wBZS1UOEwEXkIEz5YG0gUVY\"",
    "mtime": "2023-08-18T07:09:27.118Z",
    "size": 781,
    "path": "../public/img/icon/zalo.png"
  },
  "/img/news/1.jpg": {
    "type": "image/jpeg",
    "etag": "\"68681-Lw4lpGmj3bhBUVbLN4EgDmumPU4\"",
    "mtime": "2023-08-18T07:09:27.098Z",
    "size": 427649,
    "path": "../public/img/news/1.jpg"
  },
  "/img/news/2.jpg": {
    "type": "image/jpeg",
    "etag": "\"48ce4-VeNxRMpy/GF/UFji1Qb+DP/gL8k\"",
    "mtime": "2023-08-18T07:09:27.098Z",
    "size": 298212,
    "path": "../public/img/news/2.jpg"
  },
  "/img/news/3.jpg": {
    "type": "image/jpeg",
    "etag": "\"2781a-/RNQCFlpZQlUEdF/mN2xBH36G9U\"",
    "mtime": "2023-08-18T07:09:27.088Z",
    "size": 161818,
    "path": "../public/img/news/3.jpg"
  },
  "/img/news/4.jpg": {
    "type": "image/jpeg",
    "etag": "\"25a64-3RBM4+yA6eLmpC8BYJXzGTFe93s\"",
    "mtime": "2023-08-18T07:09:27.088Z",
    "size": 154212,
    "path": "../public/img/news/4.jpg"
  },
  "/img/product/1.png": {
    "type": "image/png",
    "etag": "\"1702e-t7imtdrpFT79ETOW/0D7pPzf3jc\"",
    "mtime": "2023-08-18T07:09:27.078Z",
    "size": 94254,
    "path": "../public/img/product/1.png"
  },
  "/img/product/2.png": {
    "type": "image/png",
    "etag": "\"109ef-N5+bQnrbkzoMTjNVi8qovkWy2Gk\"",
    "mtime": "2023-08-18T07:09:27.078Z",
    "size": 68079,
    "path": "../public/img/product/2.png"
  },
  "/img/product/3.png": {
    "type": "image/png",
    "etag": "\"14ed5-5f5JOfWo5aroaY/+blDz/1dY3Rc\"",
    "mtime": "2023-08-18T07:09:27.078Z",
    "size": 85717,
    "path": "../public/img/product/3.png"
  },
  "/img/cart/payment/atm.png": {
    "type": "image/png",
    "etag": "\"a96-swnzdbr0XjVwZgWcYjF1HsUAI20\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 2710,
    "path": "../public/img/cart/payment/atm.png"
  },
  "/img/cart/payment/img.png": {
    "type": "image/png",
    "etag": "\"28b9a-Y1nPSyyPFaohrXHJ7gHFRBqoBdM\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 166810,
    "path": "../public/img/cart/payment/img.png"
  },
  "/img/cart/payment/mbfpay.png": {
    "type": "image/png",
    "etag": "\"fc1-lrsLdcaPeL+QZhtmOf/ieaNSogk\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 4033,
    "path": "../public/img/cart/payment/mbfpay.png"
  },
  "/img/cart/payment/momo.png": {
    "type": "image/png",
    "etag": "\"df2-sOV12R64rOs3qP9TZmknt9B19Kk\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 3570,
    "path": "../public/img/cart/payment/momo.png"
  },
  "/img/cart/payment/qr.png": {
    "type": "image/png",
    "etag": "\"395-T8LOK5s7cf0Hps7nbgWXSTgfT8w\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 917,
    "path": "../public/img/cart/payment/qr.png"
  },
  "/img/cart/payment/visa.png": {
    "type": "image/png",
    "etag": "\"11a1-/q6D8FJ1ejPUj62CgbpUX/00trg\"",
    "mtime": "2023-08-18T07:09:27.218Z",
    "size": 4513,
    "path": "../public/img/cart/payment/visa.png"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {"/_nuxt":{"maxAge":31536000}};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      event.node.res.removeHeader("cache-control");
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    if (!event.handled) {
      event.node.res.statusCode = 304;
      event.node.res.end();
    }
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_ABNdj9 = () => import('../handlers/renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_ABNdj9, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_ABNdj9, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || {};
      const envContext = event.node.req.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  gracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const listener = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { useRuntimeConfig as a, getRouteRules as g, nodeServer as n, useNitroApp as u };
