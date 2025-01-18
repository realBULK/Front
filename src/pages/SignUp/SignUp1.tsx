import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const SignUp1: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string | null>(null);

  // 닉네임 유효성 검사 스키마
  const nicknameSchema = yup
    .string()
    .required("닉네임을 입력해주세요")
    .max(10, "닉네임은 10자 이내로 설정해주세요");

  const handleNicknameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNickname(value);

    try {
      await nicknameSchema.validate(value); // 실시간 유효성 검사
      setError(null);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      } else {
        setError("알 수 없는 오류가 발생했습니다.");
      }
    }
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      try {
        await nicknameSchema.validate(nickname);
        setError(null);

        // 중복된 닉네임인지 확인 (예시: 비동기 호출로 백엔드 통신 필요)
        const isDuplicate = false; // 백엔드와 통신하여 결과 받기

        if (isDuplicate) {
          setError("사용이 불가능한 닉네임입니다."); // 중복된 닉네임 에러 메시지
          return;
        }

        navigate("/signup2", { state: { nickname } });
      } catch (err) {
        if (err instanceof yup.ValidationError) {
          setError(err.message);
        }
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
    
      {/* Title */}
      <div className="text-center mt-20 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-bold font-[GmarketSansWeight] text-black ml-4 text-left whitespace-pre-line">
          닉네임을{"\n"}알려 주세요.
        </h1>
        <p className="font-semibold font-[pretendard] mt-8 ml-4 text-left text-[16px]">
          한 번 설정한 닉네임은 추후에 변경 가능해요!
        </p>
      </div>

      {/* Input Section */}
      <div className="w-[327px] mx-auto mt-4">
        <input
          type="text"
          id="nickname-input"
          placeholder="예: 홍길동"
          className={`w-[327px] h-[55px] font-[pretendard] bg-white border ${
            error ? "border-[#FE8383]" : "border-[#EDEDED]"
          } shadow-whiteBox rounded-base px-4 text-[14px] text-gray-800 placeholder-gray-400 outline-none`}
          value={nickname}
          onChange={handleNicknameChange}
          onKeyPress={handleKeyPress}
        />
        {error && (
          <p className="mt-2 text-[10px] font-[pretendard] text-right" style={{ color: "#F81919" }}>
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignUp1;
