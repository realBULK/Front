import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../apis/axiosInstance";

interface FormData {
  email: string;  
  password: string;
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await API.post("api/user/login", {
        email: formData.email,
        password: formData.password,
      });
      console.log("로그인 응답 데이터:", response.data);
  
      if (!response.data.data) {
        console.error("response.data.data가 없습니다!", response.data);
        alert("서버 응답 오류 발생. 다시 시도해주세요.");
        return;
      }
  
      const { accessToken } = response.data.data;  // ✅ accessToken 사용
      console.log("받은 액세스 토큰:", accessToken);
  
      if (!accessToken) {
        console.error("로그인 응답에서 `accessToken`이 없습니다!", response.data.data);
        alert("서버에서 액세스 토큰을 반환하지 않습니다. 백엔드 API 확인 필요!");
        return;
      }
  
      localStorage.setItem("access_token", accessToken);  // ✅ 저장되는 key는 동일하게 유지
  
      alert("로그인 성공!");
      navigate("/report");
  
    } catch (error: any) {
      console.error("로그인 실패:", error.response?.data || error);
      alert("로그인 실패: " + (error.response?.data?.message || "서버 오류 발생"));
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-[Pretendard]">
      <div className="w-full max-w-[85%] p-6 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">로그인</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-[3px]">이메일</label>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-[3px]">비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-[#DAE6CB] text-white rounded-lg hover:bg-[#ACB99C] transition"
          >
            로그인
          </button>
        </form>

        <div className="mt-4 text-gray-500 text-sm mb-[5px]">또는</div>

        <Link to="/questionstart" className="text-green-600 hover:text-green-500 transition">
          회원가입 하러가기
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
