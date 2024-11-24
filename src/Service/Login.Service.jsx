import http from "../api/AxiosInstint";

class loginDataService {
  // login
  login(data) {
    return http.post("/login", data);
  }

  // logout
  logout() {
    return http.post("/logout");
  }

  // signup
  signup(data) {
    return http.post("/register", data);
  }

  // forget password
  forgotPassword(email) {
    return http.post("/forgot-password", { email });
  }

  // verify email
  verifyEmail(token) {
    return http.get(`/verify-email/${token}`);
  }

  // reset password
  resetPassword(data) {
    return http.post("/reset-password", data);
  }

  // update(id, data) {
  //   return http.put(`/users/${id}`, data);
  // }

  // getSingle(id) {
  //   return http.get(`/users/${id}`);
  // }
}

const loginService = new loginDataService();
export default loginService;
