import axios from "axios";
import { queryClient } from "./queryClient";

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

    // ------------------------------------
    // 1. Refresh request itself failed
    // ------------------------------------
    if (originalRequest?.url === "/auth/refresh") {
      if (error.response?.status === 401) {
        handleLogout();
      }

      return Promise.reject(error);
    }

    // ------------------------------------
    // 2. Access token expired
    // ------------------------------------
    if (
      error.response?.status === 401 &&
      !originalRequest?._retry &&
      error.response?.data?.code === "ACCESS_TOKEN_EXPIRED"
    ) {
      originalRequest._retry = true;

      try {
        const res = await api.post("/auth/refresh");

        const newToken = res.data.accessToken;

        localStorage.setItem("accessToken", newToken);

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return api(originalRequest);

      } catch (refreshError) {
        // Refresh token failed
        handleLogout();

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

const handleLogout = () => {
  localStorage.removeItem("accessToken");

  queryClient.clear();

  window.location.href = "/login";
};

export default api;