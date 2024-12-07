import axios from "axios";
import { logout, refreshToken } from "./authService";

// Helper untuk membaca cookie
export function getCookie(name: string) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Interceptor untuk request: Set header Authorization dengan token
axiosInstance.interceptors.request.use((config) => {
  // const token = sessionStorage.getItem("accessToken");
  const token = getCookie("accessToken"); // Ambil token dari cookie

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Interceptor untuk response: Tangani error 401
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Jika error 401 dan request belum di-retry
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Tandai request sudah di-retry

      // Coba refresh token
      const newAccessToken = await refreshToken();

      if (newAccessToken) {
        // Set access token baru ke header request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest); // Ulangi request asli
      } else {
        // Jika refresh token gagal, logout dan redirect
        logout();
      }
    }

    return Promise.reject(error); // Kembalikan error jika bukan 401
  }
);

export default axiosInstance;
