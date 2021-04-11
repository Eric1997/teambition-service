export default class Response {
  /**
   * 是否成功
   */
  success: boolean;
   /**
   * 提示信息
   */
  msg?: string;

  code: number;

  // constructor(success, msg, wxResponse, value) {
  //   this.success = success;
  //   this.msg = msg;
  //   this.value = value;
  //   this.originResponse = wxResponse;
  // }

  // static success(originResponse = null, value = null) {
  //   return new Response(true, 'success', originResponse, value);
  // }

  // static fail(msg = '', originResponse = null, value = null) {
  //   return new Response(false, msg, originResponse, value);
  // }
}