import axios from "./index";

class AuthApi {
  static Login = (data) => {
    return axios.post(`${base}/login`, data);
  };

  static Register = (data) => {
    // return axios.post(`${base}/register`, data);
    return axios.post(`${base}/register`, data);

  };

  static Logout = (data) => {
    return axios.post(`${base}/logout`, data);
  };

  static ForgotPassword = (data) => {
    return axios.post(`${base}/forgot-password`, data);
  };

  static ResetPassword = (data) => {
    return axios.post(`${base}/reset-password`, data);
  };

  // static VerificationEmail = (data) => {
  //   return axios.post(`{base}/verification.notice`, data);
  // }
}

let base = "users";

export default AuthApi;
