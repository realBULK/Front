import axios from "axios";

const API = axios.create({
  baseURL: "http://43.200.218.42:8080", // 백엔드 URL
});

// 요청 시 Authorization 헤더 추가
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token"); 
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;

