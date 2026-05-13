import axios from "axios";
import { queryClient } from "./queryClient";
import { useNavigate } from "react-router-dom";

const api = axios.create({
  baseURL: process.env.REACT_APP_API,
  withCredentials: true,
});

// REQUEST interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// RESPONSE interceptor
api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

  
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== "/auth/refresh"
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/auth/refresh");

        const newToken = res.data.accessToken;
        localStorage.setItem("accessToken", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (err) {
        handleLogout();
        return Promise.reject(err);
      }
    }

   
    if (error.response?.data?.code === "RefreshToken-Error") {
      handleLogout();
    }

    return Promise.reject(error);
  }
);


const handleLogout = () => {
  localStorage.removeItem("accessToken");
  queryClient.clear(); 
};

export default api;