import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

const requestHandler = (request) => {
  const token = localStorage.getItem("token");
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }
  return request;
};

const responseHandler = (response) => {
  return response;
};

// handler error
const errorHandler = (error) => {
  if (error.response) {
    console.error(
      "Response error:",
      error.response.status,
      error.response.data
    );
    if (error.response.status === 401) {
      console.error("Unauthorized, please log in again.");
    }
  } else if (error.request) {
    console.error("Network error:", error.request);
  } else {
    console.error("Error:", error.message);
  }
  return Promise.reject(error);
};

http.interceptors.request.use(requestHandler);
http.interceptors.response.use(responseHandler, errorHandler);

export default http;
