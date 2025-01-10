import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../components/ProgressBar";

const SignUp3: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState(""); // 닉네임 상태 관리

  const handleNicknameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value); // 입력값 업데이트
  };

  const handleNicknameSubmit = () => {
    console.log(`Entered Nickname: ${nickname}`);
    navigate("/signup4", { state: { nickname } }); // SignUp4 페이지로 닉네임 전달
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNicknameSubmit(); // 엔터 키 입력 시 다음 페이지로 이동
    }
  };

  const handleBlur = () => {
    if (nickname) {
      handleNicknameSubmit(); // 입력 필드에서 포커스가 벗어나면 이동
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-16">
        <ProgressBar progress={100} />
      </div>

      {/* Title */}
      <div className="text-center mt-6 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-bold font-gmarket text-black ml-4 text-left whitespace-pre-line">
          닉네임을{"\n"}알려주세요.
        </h1>
        <p className="text-gray-600 mt-8 ml-4 text-left font-semibold text-[16px]">
          한 번 설정한 닉네임은 추후에 변경 가능해요!
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full max-w-xs mx-auto mt-4">
        <input
          type="text"
          id="nickname-input"
          placeholder="예: 홍길동"
          className="w-full bg-white border border-gray-300 shadow rounded-lg py-3 px-4 text-[14px] text-gray-800 placeholder-gray-400 outline-none"
          value={nickname}
          onChange={handleNicknameChange} // 입력값 업데이트
          onKeyPress={handleKeyPress} // 엔터 키 이벤트 처리
          onBlur={handleBlur} // 포커스 아웃 이벤트 처리
        />
      </div>
    </div>
  );
};

export default SignUp3;
