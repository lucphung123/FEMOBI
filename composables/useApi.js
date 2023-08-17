import { useUserStore } from "~~/stores/userStore";

//public api
let ENDPOINTS = {
  DEMO: "/api/demo.json",
};

class Request {
  constructor() {
    this.handler = {
      onRequest({ request, options }) {
        // const token = useCookie("Bearer")
        // let login
        // const { header, payload } = useJwt(token)
        // if (Date.now() / 1000 < payload.value.exp) {
        //   return
        // } else {
        //   if (process.client) {
        //     const { getSigninUrl, getSignupUrl } = useCasdoor()
        //     login = () => {
        //       window.location.href = getSigninUrl()
        //     }
        //     login()
        //   }
        // }
        // Set the request headers
        // options.headers = options.headers || {}
        // options.headers.authorization = "..."
      },
      onRequestError({ request, options, error }) {},
      async onResponse({ request, response, options }) {
        const userStore = useUserStore();
        const bearer = useCookie("Bearer");
        if ([401, 403].includes(response.status)) {
          bearer.value = null;
          userStore.logout();
          localStorage.setItem("user", JSON.stringify({}));
          await navigateTo("/");
        }
        return response._data;
      },
      onResponseError({ request, response, options }) {
        // console.log("🚀 ~ file: useApi.js:72 ~ Request ~ onResponseError ~ error:", error)
      },
    };

    if (process.client) {
      const userStore = useUserStore();
      this.TOKEN = `Bearer ${userStore.user.token}`;
    } else {
      const bearer = useCookie("Bearer");
      this.TOKEN = `Bearer ${bearer.value}`;
    }
  }

  get(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: this.TOKEN,
      },
      ...options,
      ...this.handler,
    });
  }

  post(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: this.TOKEN,
      },
      ...options,
      ...this.handler,
    });
  }

  patch(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: this.TOKEN,
      },
      ...options,
      ...this.handler,
    });
  }

  put(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: this.TOKEN,
      },
      ...options,
      ...this.handler,
    });
  }

  delete(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: this.TOKEN,
      },
      ...options,
      ...this.handler,
    });
  }
}

class RestApi {
  constructor(docx_url) {
    this.demo = new DemogetApi(this.requester);
  }
  setToken(token) {
    this.requester.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${userStore.user.token}`;
  }
  async login(user) {
    return this.requester.post(ENDPOINTS.SIGN_IN, user, {
      headers: {},
    });
  }

  login_sso(data) {
    return this.requester.post(ENDPOINTS.LOGIN_SSO, { body: data });
  }

  // luyentm todo not use right now
  isTokenExpired(token) {
    try {
      return (
        Date.now() >= JSON.parse(window.atob(token.split(".")[1])).exp * 1000
      );
    } catch (e) {
      return false;
    }
  }

  async parserDocx(fileUrl = "") {
    return this.requester.post(ENDPOINTS.DOCX_PARSER, {
      body: { fileUrl: fileUrl },
    });
  }
  // upload image
  async get_url_upload(acl, content_encoding, content_type, key, platform) {
    let data = { acl, content_encoding, content_type, key, platform };
    return this.requester.put(ENDPOINTS.S3, { body: data });
  }
  async upload_s3(
    key,
    data,
    { category_id, encoding, content_type, acl, bucket } = {
      category_id: null,
      encoding: "base64",
      content_type: "image/jpeg",
      acl: "public-read",
      bucket: "mobiedu",
    },
    progress
  ) {
    const { data: resp } = await this.get_url_upload(
      acl,
      encoding,
      content_type,
      key,
      bucket
    );
    const url = resp.value?.url;
    const direct_url = resp.value?.direct_url;
    if (!url || !direct_url) throw Error("presigned error");
    let buf;
    switch (encoding) {
      case "base64":
        // buf = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""), "base64")
        buf = _base64ToArrayBuffer(
          data.replace(/^data:image\/\w+;base64,/, "")
        );
        break;
      case "blob":
        buf = data;
        break;
      default:
        throw new Error("Invalid encoding");
    }
    // put turn 2
    await useFetch(url, {
      method: "PUT",
      headers: {
        Authorization: "",
        "x-amz-acl": acl || "public-read",
        "Content-Encoding": encoding,
        "Content-Type": content_type,
      },
      body: buf,
    });
    // await this.requester.put1(url, buf, {
    //   headers: {
    //     Authorization: "",
    //     "x-amz-acl": acl || "public-read",
    //     "Content-Encoding": encoding,
    //     "Content-Type": content_type,
    //   },
    //   //   onUploadProgress: progress,
    // })
    // await this.media.create({
    //   name: key,
    //   type: content_type,
    //   category_id,
    //   data: {
    //     url: direct_url,
    //   },
    // })
    return direct_url;
  }
}

class DemogetApi {
  constructor(requester) {
    this.requester = requester;
  }
  async getApi(data) {
    return this.requester.get(ENDPOINTS.DEMO, {
      body: data,
    });
  }
  async getApi1(data) {
    return this.requester.get(ENDPOINTS.DEMO, {
      params: data,
    });
  }
}

function _base64ToArrayBuffer(base64) {
  let binary_string = window.atob(base64);
  let len = binary_string.length;
  let bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes.buffer;
}

export default () => {
  return { RestApi: new RestApi() };
};
