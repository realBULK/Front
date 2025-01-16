import React from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import ProgressBar from "../../components/ProgressBar";

const SignUp1: React.FC = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 네비게이트 훅

  const handleGenderSelect = (gender: string) => {
    console.log(`Selected Gender: ${gender}`);
    navigate("/signup2"); // SignUp2 페이지로 이동
  };

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
      {/* Progress Bar */}
      <div className="w-full max-w-md mx-auto mt-16">
        <ProgressBar progress={25} />
      </div>

      {/* Title */}
      <div className="text-center mt-4 w-full max-w-md mx-auto">
        <h1 className="text-[40px] font-[GmarketSansWeight] font-bold text-black ml-4 text-left whitespace-pre-line">
          성별을{"\n"}선택해 주세요.
        </h1>
        <p className="font-[pretendard] font-semibold mt-8 ml-4 text-left text-[16px]">
          성별에 따라 몸에 필요한 에너지가 달라져요!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-3 mt-4 w-full max-w-xs mx-auto">
        <button
          className="w-[327px] h-[55px] bg-white border border-[#EDEDED] shadow-whiteBox rounded-base text-black text-left text-[14px] pl-4 font-[pretendard]"
          onClick={() => handleGenderSelect("남자")}
        >
          남자
        </button>
        <button
          className="w-[327px] h-[55px] bg-white border border-[#EDEDED] shadow-whiteBox rounded-base text-black text-left text-[14px] pl-4 font-[pretendard]"
          onClick={() => handleGenderSelect("여자")}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default SignUp1;
