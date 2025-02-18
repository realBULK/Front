import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../apis/api";

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const navigate = useNavigate();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("유효한 이메일 주소를 입력하세요.");
      } else {
        setEmailError(null);
      }
    }

    if (name === "confirmPassword" || name === "password") {
      if (formData.password !== value && formData.confirmPassword !== "") {
        setPasswordError("비밀번호가 일치하지 않습니다.");
      } else {
        setPasswordError(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    if (!validateEmail(formData.email)) {
      setEmailError("유효한 이메일 주소를 입력하세요.");
      return;
    }
  
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
      return;
    }
  
    try {
      // confirmPassword 제외하고 백엔드로 데이터 전송
      await API.post("/signup", {
        email: formData.email,
        password: formData.password,
      });
  
      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      navigate("/login");
    } catch (error: any) {
      alert("회원가입 실패: " + (error.response?.data?.message || "서버 오류 발생"));
    }
  };
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[85%] p-6 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">회원가입</h2>

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
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
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

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-[3px]">비밀번호 확인</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="비밀번호를 다시 입력하세요"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            회원가입
          </button>
        </form>

        <div className="mt-4 mb-[5px] text-gray-500 text-sm">이미 회원이신가요?</div>

        <Link to="/login" className="text-green-500 hover:text-green-600 transition">
          로그인 하러가기
        </Link>
      </div>
    </div>
  );
};

export default SignupForm;
