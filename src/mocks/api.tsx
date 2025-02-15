import axios from "axios";

const API = axios.create({
  baseURL: "http://43.200.218.42:8080/api",
});

// 요청 시 Authorization 헤더 추가
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
