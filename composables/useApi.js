import { useUserStore } from "~~/stores/userStore"
let ENDPOINTS = {
  SETTING: "https://moocs.codeinet.com/admin/settings.json",
  SET_FCM: "https://notification.mobiedu.vn/client/fcm_token.json",
  SETTING_INDEX: "/restapi/page/getpagedata",
  CATEGORY: "/course/restapi/coursecategory/list",
  COURSE: "/course/restapi/course/list",
  COURSE_DETAILS: "/course/restapi/course/getdetail",
  COURSE_FULL_DETAILS: "/course/restapi/course/ListLesson",
  COURSE_USER: "/course/course/liststudent",
  COURSE_PACKAGE: "/course/restapi/coursepackage/list",
  COURSE_PACKAGE_DETAIL: "/course/restapi/coursepackage/get",
  COURSE_COMPLETE_LESSON: "/course/course/completelesson",
  LIST_BLOG: "/restapi/blog/list",
  DETAIL_BLOG: "/restapi/blog/getdetail",
  CATEGORY_BLOGS: "/restapi/blog/categories",
  ACTIVE_COURSE: "/course/ActiveCode/ActiveCode",
  LOGIN: "/auth/user/ssosignin",
  ACTIVE_COURSE_FREE: "/course/restapi/course/addfreecourse",
  ACTIVE_PACKAGE_FREE: "/course/restapi/coursepackage/addfreepackage",
  USER: "/auth/restapi/user/profile",
  EDIT_USER: "/auth/restapi/user/editprofile",
  CHECH_OUT: "/course/restapi/order/mooccheckout",
  VALIDATE_CHECK_OUT: "/course/restapi/order/validatecheckout",
  LOG_LOGIN: "/userlog/log/loginlog",
  LOG_TRANSACTION: "/course/order/listorderhistory",
  DETAIL_TEACHER: "/course/teacher/get",
  USER_NOTIFICATION: "/auth/restapi/user/mynotification",
  DETAIL_NOTIFICATION: "/auth/restapi/user/detailnotification",
  APPLY_COUPON: "/course/restapi/order/applycouponcode",
  INFO_CART: "/course/restapi/course/ListCoursesByIds",
  LIST_REVIEW: "/course/course/getreviewcourse",
  LIST_REVIEW_NO_TOKEN: "/course/restapi/course/GetReviewCourse",
  SEND_REVIEW: "/course/coursereview/sendreview",
  COMMENT_COURSE: "/course/coursereview/list",
  SEND_COMMENT_COURSE: "/course/coursereview/addcomment",
  SUBCOMMENT_COURSE: "/course/coursereview/subcomments",
  SEND_SUBCOMMENT_COURSE: "/course/coursereview/replycomment",
  // CERTIFICATE: "/course/course/DrawCertificate",
  GET_URL_UPLOAD: "/storage/file/getuploadurl",
  GET_URL: "/storage/file/insertfile",
  PROVINCES: "/auth/location/provinces",
  DISTRICTS: "/auth/location/districts",
  COOPERATE: "/course/cooperationsignup/addapi",
  INFO_AFFILIATE: "/course/restapi/affiliate/get",
  COURSE_AFFILIATE: "/course/restapi/affiliate/listcourse",
  COMBO_AFFILIATE: "/course/restapi/affiliate/listpackage",
  ORDER_AFFILIATE: "/course/restapi/affiliate/orderlist",
  INCOME_AFFILIATE: "/course/restapi/affiliate/totalincome",
  CHART_INCOME_AFFILIATE: "/course/restapi/affiliate/revenuechart",
  CHART_ORDER_AFFILIATE: "/course/restapi/affiliate/orderchart",
  TABLE_INCOME_AFFILIATE: "/course/restapi/affiliate/incomelist",
  EXPORT_INCOME_AFFILIATE: "/course/restapi/affiliate/exportincomelist",
  GET_INFO_PAYMENT_AFFILIATE: "/course/restapi/affiliate/getsetting",
  UPDATE_INFO_PAYMENT_AFFILIATE: "/course/restapi/affiliate/editsetting",
  HISTORY_PAYMENT_AFFILIATE: "/course/restapi/affiliate/paymentlogs",
  DETAIL_AFFILIATE: "/course/restapi/affiliate/getdiscount",
  SEO_DATA: "/restapi/page/get",
  CERTIFICATE_BY_ID_COURSE: "/course/MoocCertificate/DetailByCourse",
  CERTIFICATE_DETAIL: "/course/MoocCertificate/Detail",
  CERTIFICATE_DRAW: "/course/MoocCertificate/DrawCertificate",
  CERTIFICATE_FIND: "/course/MoocCertificate/ListFe",
}

const MAP_ENDPOINTS = {
  "mooc.dayhoc.net": "inet_moocs.dayhoc.net",
  "mooc.codeinet.com": "test-mooc.mobiedu.vn",
}

class Request {
  constructor() {
    this.handler = {
      onRequest({ request, options }) {
        // Set the request headers
        // options.headers = options.headers || {}
        // options.headers.authorization = "..."
      },
      onRequestError({ request, options, error }) {
        // const userStore = useUserStore()
        // userStore.logout()
      },
      onResponse({ request, response, options }) {
        // console.log(response._data.code, process.client)
        // if (!response._data.status) {
        // throw createError({ statusCode:response._data.code ,message:response._data.message, fatal: true })
        // console.log("resAPI", response._data)
        //   userStore.logout();
        //   await navigateTo("/");
        // const userStore = useUserStore();
        // userStore.logout();
        //   createError({ statusCode: response._data.code, message: response._data.message, fatal: true });
        // }
        return response._data
      },
      onResponseError({ request, response, options }) {
        // console.log("🚀 ~ file: useApi.js:72 ~ Request ~ onResponseError ~ error:", response)
      },
    }

    // if (process.server) {
    //   console.log(useRequestHeaders().host)
    // } else {
    //   console.log(window.location.host)
    // }
    if (process.client) {
      const userStore = useUserStore()
      this.TOKEN = userStore.token || ""
      this.NOTIFICATION_TOKEN = userStore.notificationToken || ""
      this.DOMAIN = window.location.host
    } else {
      const access_token = useCookie("AccessToken")
      const notification_token = useCookie("NotificationToken")
      this.TOKEN = access_token.value || ""
      this.NOTIFICATION_TOKEN = notification_token.value || ""
      this.DOMAIN = useRequestHeaders().host
    }

    if (MAP_ENDPOINTS[this.DOMAIN]) {
      this.HOST = MAP_ENDPOINTS[this.DOMAIN]
    } else {
      this.HOST = "test-mooc.mobiedu.vn"
    }
    // this.HOST ="inet_moocs.dayhoc.net"
    if (this.TOKEN != "") {
      this.headers = {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + this.TOKEN,
        "mobiedu-domain": this.HOST,
      }
    } else {
      this.headers = {
        "Content-type": "application/json; charset=UTF-8",
        "mobiedu-domain": this.HOST,
      }
    }
  }

  get(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "GET",
      headers: this.headers,
      ...options,
      ...this.handler,
    })
  }
  post(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "POST",
      headers: this.headers,
      ...options,
      ...this.handler,
    })
  }
  patch(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "PATCH",
      headers: this.headers,
      ...options,
      ...this.handler,
    })
  }
  put(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "PUT",
      headers: this.headers,
      ...options,
      ...this.handler,
    })
  }
  get_type(url, options) {
    return useFetch(url, {
      baseURL: useRuntimeConfig().public.baseURL,
      method: "GET",
      headers: { Authorization: "Bearer " + this.TOKEN },
      ...options,
      ...this.handler,
    })
  }
  post_notification(url, options) {
    return useFetch(url, {
      method: "POST",
      headers: { Authorization: "Bearer " + this.NOTIFICATION_TOKEN },
      ...options,
      ...this.handler,
    })
  }
}
class RestApi {
  constructor() {
    this.requester = new Request()
    this.user = new User(this.requester)
    this.category = new Category(this.requester)
    this.course = new Course(this.requester)
    this.blog = new Blog(this.requester)
    this.s3 = new S3(this.requester)
    this.cart = new Cart(this.requester)
    this.log = new Log(this.requester)
    this.teacher = new Teacher(this.requester)
    this.notification = new Notification(this.requester)
    this.comment = new Comment(this.requester)
    this.affiliate = new Affiliate(this.requester)
    this.certificate = new Certificate(this.requester)
  }
  async setting(data) {
    return this.requester.get(ENDPOINTS.SETTING, data)
  }
  // async certificate(data) {
  //   return this.requester.get_type(ENDPOINTS.CERTIFICATE, data)
  // }
  async provinces(data) {
    return this.requester.get(ENDPOINTS.PROVINCES, data)
  }
  async districts(data) {
    return this.requester.get(ENDPOINTS.DISTRICTS, data)
  }
  async cooperate(data) {
    return this.requester.post(ENDPOINTS.COOPERATE, data)
  }
  async settings_index(data) {
    return this.requester.get(ENDPOINTS.SETTING_INDEX, data)
  }
  async seo_data(data) {
    return this.requester.get(ENDPOINTS.SEO_DATA, data)
  }
}
class S3 {
  constructor(requester) {
    this.requester = requester
  }
  async get_url_upload(fileName, contentType, size, idSite) {
    let data = { fileName, contentType, size, idSite }
    return this.requester.get(ENDPOINTS.GET_URL_UPLOAD, { query: data })
  }
  async upload(files) {
    if (files.length > 0) {
      const { data: resp } = await this.get_url_upload(files[0].name, files[0].type, files[0].size, 2)
      const { data: upload } = await useFetch(resp.value.data.uploadUrl, { method: "PUT", headers: { "x-amz-acl": "public-read", "Content-Type": files[0].type }, body: files[0] })
      let query_data = {
        idSite: 2,
        idFile: resp.value.data.idFile,
      }
      return this.requester.get(ENDPOINTS.GET_URL, { query: query_data })
    } else {
      const { data: resp } = await this.get_url_upload(files.name, files.type, files.size, 2)
      const { data: upload } = await useFetch(resp.value.data.uploadUrl, { method: "PUT", headers: { "x-amz-acl": "public-read", "Content-Type": files.type }, body: files })
      let query_data = {
        idSite: 2,
        idFile: resp.value.data.idFile,
      }
      return this.requester.get(ENDPOINTS.GET_URL, { query: query_data })
    }
  }
  // async upload(
  //   key,
  //   data,
  //   { encoding, content_type, acl, bucket } = {
  //     encoding: "base64",
  //     content_type: "image/jpeg",
  //     acl: "public-read",
  //     bucket: "mobiedu",
  //   },
  // ) {

  //   // const { data: resp } = await this.get_url_upload(acl, encoding, content_type, key, bucket)
  //   // const url = resp.value?.url
  //   // const direct_url = resp.value?.direct_url
  //   // if (!url || !direct_url) throw Error("presigned error")
  //   // let buf
  //   // switch (encoding) {
  //   //   case "base64":
  //   //     buf = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""), "base64")
  //   //     break
  //   //   case "blob":
  //   //     buf = data
  //   //     break
  //   //   default:
  //   //     throw new Error("Invalid encoding")
  //   // }
  //   // await useFetch(url, {
  //   //   method: "PUT",
  //   //   headers: {
  //   //     Authorization: "",
  //   //     "x-amz-acl": acl || "public-read",
  //   //     "Content-Encoding": encoding,
  //   //     "Content-Type": content_type,
  //   //   },
  //   //   body: buf,
  //   // })
  //   // return direct_url
  // }
}
class User {
  constructor(requester) {
    this.requester = requester
  }
  async login(data) {
    return this.requester.get(ENDPOINTS.LOGIN, data)
  }
  async get(data) {
    return this.requester.get(ENDPOINTS.USER, data)
  }
  async update(data) {
    return this.requester.patch(ENDPOINTS.EDIT_USER, data)
  }
}
class Category {
  constructor(requester) {
    this.requester = requester
  }
  async get(data) {
    return this.requester.get(ENDPOINTS.CATEGORY, data)
  }
}
class Course {
  constructor(requester) {
    this.requester = requester
  }
  async get(data) {
    return this.requester.get(ENDPOINTS.COURSE, data)
  }
  async getPackage(data) {
    return this.requester.get(ENDPOINTS.COURSE_PACKAGE, data)
  }
  async getPackageDetail(data) {
    return this.requester.get(ENDPOINTS.COURSE_PACKAGE_DETAIL, data)
  }
  async getDetails(data) {
    return this.requester.get(ENDPOINTS.COURSE_DETAILS, data)
  }
  async getDetailsFull(data) {
    return this.requester.get(ENDPOINTS.COURSE_FULL_DETAILS, data)
  }
  async getByUser(data) {
    return this.requester.get(ENDPOINTS.COURSE_USER, data)
  }
  async active(data) {
    return this.requester.post(ENDPOINTS.ACTIVE_COURSE, data)
  }
  async activeCourseFree(data) {
    return this.requester.post(ENDPOINTS.ACTIVE_COURSE_FREE, data)
  }
  async activePackageFree(data) {
    return this.requester.post(ENDPOINTS.ACTIVE_PACKAGE_FREE, data)
  }
  async completeLesson(data) {
    return this.requester.post(ENDPOINTS.COURSE_COMPLETE_LESSON, data)
  }
}
class Blog {
  constructor(requester) {
    this.requester = requester
  }
  async list(data) {
    return this.requester.get(ENDPOINTS.LIST_BLOG, data)
  }
  async detail(data) {
    return this.requester.get(ENDPOINTS.DETAIL_BLOG, data)
  }
  async category(data) {
    return this.requester.get(ENDPOINTS.CATEGORY_BLOGS, data)
  }
}
class Cart {
  constructor(requester) {
    this.requester = requester
  }
  async check_out(data) {
    return this.requester.post(ENDPOINTS.CHECH_OUT, data)
  }
  async validate_check_out(data) {
    return this.requester.get(ENDPOINTS.VALIDATE_CHECK_OUT, data)
  }
  async apply_coupon(data) {
    return this.requester.post(ENDPOINTS.APPLY_COUPON, data)
  }
  async info_cart(data) {
    return this.requester.get(data)
  }
}
class Log {
  constructor(requester) {
    this.requester = requester
  }
  async login(data) {
    return this.requester.get(ENDPOINTS.LOG_LOGIN, data)
  }
  async transaction(data) {
    return this.requester.get(ENDPOINTS.LOG_TRANSACTION, data)
  }
}
class Teacher {
  constructor(requester) {
    this.requester = requester
  }
  async detail(data) {
    return this.requester.get(ENDPOINTS.DETAIL_TEACHER, data)
  }
}
class Notification {
  constructor(requester) {
    this.requester = requester
  }
  async get(data) {
    return this.requester.get(ENDPOINTS.USER_NOTIFICATION, data)
  }
  async detail(data) {
    return this.requester.get(ENDPOINTS.DETAIL_NOTIFICATION, data)
  }
  async set_fcm(data) {
    return this.requester.post_notification(ENDPOINTS.SET_FCM, data)
  }
}
class Comment {
  constructor(requester) {
    this.requester = requester
  }
  async get_review(data) {
    return this.requester.get(ENDPOINTS.LIST_REVIEW, data)
  }
  async get_review_no_token(data) {
    return this.requester.get(ENDPOINTS.LIST_REVIEW_NO_TOKEN, data)
  }
  async send_review(data) {
    return this.requester.post(ENDPOINTS.SEND_REVIEW, data)
  }
  async comment(data) {
    return this.requester.get(ENDPOINTS.COMMENT_COURSE, data)
  }
  async send_comment(data) {
    return this.requester.post(ENDPOINTS.SEND_COMMENT_COURSE, data)
  }
  async sub_comment(data) {
    return this.requester.get(ENDPOINTS.SUBCOMMENT_COURSE, data)
  }
  async send_sub_comment(data) {
    return this.requester.put(ENDPOINTS.SEND_SUBCOMMENT_COURSE, data)
  }
}
class Affiliate {
  constructor(requester) {
    this.requester = requester
  }
  async get_info(data) {
    return this.requester.get(ENDPOINTS.INFO_AFFILIATE, data)
  }
  async get_course(data) {
    return this.requester.get(ENDPOINTS.COURSE_AFFILIATE, data)
  }
  async get_combo(data) {
    return this.requester.get(ENDPOINTS.COMBO_AFFILIATE, data)
  }
  async get_order(data) {
    return this.requester.get(ENDPOINTS.ORDER_AFFILIATE, data)
  }
  async get_income(data) {
    return this.requester.get(ENDPOINTS.INCOME_AFFILIATE, data)
  }
  async get_chart_income(data) {
    return this.requester.get(ENDPOINTS.CHART_INCOME_AFFILIATE, data)
  }
  async get_chart_order(data) {
    return this.requester.get(ENDPOINTS.CHART_ORDER_AFFILIATE, data)
  }
  async get_table_income(data) {
    return this.requester.get(ENDPOINTS.TABLE_INCOME_AFFILIATE, data)
  }
  async get_export_income(data) {
    return this.requester.get(ENDPOINTS.EXPORT_INCOME_AFFILIATE, data)
  }
  async get_payment_info(data) {
    return this.requester.get(ENDPOINTS.GET_INFO_PAYMENT_AFFILIATE, data)
  }
  async update_payment_info(data) {
    return this.requester.put(ENDPOINTS.UPDATE_INFO_PAYMENT_AFFILIATE, data)
  }
  async get_history_payment(data) {
    return this.requester.get(ENDPOINTS.HISTORY_PAYMENT_AFFILIATE, data)
  }
  async get_detail(data) {
    return this.requester.get(ENDPOINTS.DETAIL_AFFILIATE, data)
  }
}
class Certificate {
  constructor(requester) {
    this.requester = requester
  }
  async detail_by_course(data) {
    return this.requester.get(ENDPOINTS.CERTIFICATE_BY_ID_COURSE, data)
  }
  async detail(data) {
    return this.requester.get(ENDPOINTS.CERTIFICATE_DETAIL, data)
  }
  async draw(data) {
    return this.requester.get(ENDPOINTS.CERTIFICATE_DRAW, data)
  }
  async find(data) {
    return this.requester.get(ENDPOINTS.CERTIFICATE_FIND, data)
  }
}
export default () => {
  return { RestApi: new RestApi() }
}
