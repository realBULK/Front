import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";


const SignUp1: React.FC = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const [error, setError] = useState<string | null>(null);

  const nicknameSchema = yup
    .string()
    .required("") 
    .max(10, "닉네임은 10자 이내로 설정해주세요");

  const handleNicknameChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setNickname(value);

    try {
      await nicknameSchema.validate(value, { abortEarly: true });
      setError(null);
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        if (value.trim() === "") {
          setError(null);
        } else {
          setError(err.message);
        }
      } else {
        setError(null);
      }
    }
  };

  const handleKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleNext();
    }
  };

  const handleNext = async () => {
    try {
      await nicknameSchema.validate(nickname);
      setError(null);

      // 중복된 닉네임인지 확인 
      const isDuplicate = false;

      if (isDuplicate) {
        setError("사용이 불가능한 닉네임입니다.");
        return;
      }

      navigate("/signup2", { state: { nickname } });
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        setError(err.message);
      }
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      {/* Title */}
      <div className="text-center mt-20 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-bold font-[GmarketSansWeight] text-black ml-4 text-left whitespace-pre-line">
          닉네임을{"\n"}알려 주세요.
        </h1>
        <p className="font-semibold font-[pretendard] mt-8 ml-4 text-left text-[16px]">
          한 번 설정한 닉네임은 추후에 변경 가능해요!
        </p>
      </div>

      <div className="w-[327px] mx-auto mt-4">
  <input
    type="text"
    id="nickname-input"
    placeholder="예: 홍길동"
    className={`w-[327px] h-[55px] font-[pretendard] bg-[#EDEDEDCC] border-[#FFFFFF] border 
      shadow-whiteBox rounded-base px-4 text-[14px] outline-none 
      placeholder-[#BDBDBD] ${error ? "text-[#F81919]" : "text-gray-800"}
      hover:bg-[#DED1E8CC] hover:border-[#DED1E8]
      active:bg-[#EDEDEDCC] active:border-[#FFFFFF]"`} 
    value={nickname}
    onChange={handleNicknameChange}
    onKeyDown={handleKeyPress}
  />
  {error && (
    <p
      className="mt-2"
      style={{
        color: "#F81919",
        textAlign: "right",
        fontFamily: "Pretendard",
        fontSize: "10px",
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: "10px",
        letterSpacing: "-0.2px",
      }}
    >
      {error}
    </p>
  )}
</div>



     {/* Next Button */}
<div className="w-[327px] max-w-md mx-auto mt-auto mb-10">
  <button
    className="w-[327px] h-[55px] font-[pretendard] bg-[#D1D1D1] 
      shadow-whiteBox rounded-base font-semibold text-[14px] text-[#191919] outline-none
      hover:bg-[#B8ADC0] active:bg-[#9B88A8]" 
    onClick={handleNext}
    disabled={!nickname.trim() || !!error} // 닉네임이 없거나 에러가 있으면 비활성화
  >
    다음
  </button>
</div>


    </div>
  );
};

export default SignUp1;
