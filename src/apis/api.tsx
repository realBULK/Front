// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://43.200.218.42:8080",
//   withCredentials: true,
// });

// // 요청 시 자동으로 토큰 추가
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

// export default API;


// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://43.200.218.42:8080",
//   withCredentials: true,
// });

// API.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// API.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       console.error("❌ 401 Unauthorized - 토큰 만료");
//       localStorage.removeItem("accessToken");
//       window.location.href = "/login"; // 로그인 페이지로 이동
//     }
//     return Promise.reject(error);
//   }
// );

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: "http://43.200.218.42:8080", // 백엔드 URL 확인
});

// // 요청 시 Authorization 헤더 추가
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("accessToken"); // 로컬 스토리지에서 토큰 가져오기
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default API;

