import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../components/ProgressBar";

const SignUp2: React.FC = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState(""); // 나이 상태 관리

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value); // 입력값 업데이트
  };

  const handleAgeSubmit = () => {
    console.log(`Entered Age: ${age}`);
    navigate("/signup3"); // SignUp3 페이지로 이동
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleAgeSubmit(); // 엔터 키 입력 시 다음 페이지로 이동
    }
  };

  const handleBlur = () => {
    if (age) {
      handleAgeSubmit(); // 입력 필드에서 포커스가 벗어나면 이동
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-16">
        <ProgressBar progress={50} />
      </div>

      {/* Title */}
      <div className="text-center mt-6 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-[GmarketSansWeight] font-bold text-black ml-4 text-left whitespace-pre-line">
          출생 연도를{"\n"}입력해 주세요.
        </h1>
        <p className="font-semibold font-[pretendard] mt-8 ml-4 text-left text-[16px]">
          나이에 따라 하루 에너지가 달라져요!
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full mx-auto max-w-xs mt-4">
        <input
          type="text"
          id="age-input"
          placeholder="예: 2001년"
          className="w-full bg-white font-[pretendard] border border-gray-300 shadow rounded-lg py-3 px-4 text-[14px] text-gray-800 placeholder-gray-400 outline-none"
          value={age}
          onChange={handleAgeChange} // 입력값 업데이트
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
          onBlur={handleBlur} // 포커스 아웃 이벤트 처리
        />
      </div>
    </div>
  );
};

export default SignUp2;
