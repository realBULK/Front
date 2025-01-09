import React from "react";
import ProgressBar from "../../src/components/ProgressBar";

const SignUp1: React.FC = () => {
  const handleGenderSelect = (gender: string) => {
    console.log(`Selected Gender: ${gender}`);
    // TODO: 백엔드 API 호출 또는 다음 단계로 이동
  };

  return (
    <div className="h-screen flex flex-col items-center bg-primary font-pretendard">
      {/* Progress Bar */}
      <div className="w-11/12 mt-6">
        <ProgressBar progress={20} /> {/* 진행률 20%로 설정 */}
      </div>

      {/* Title */}
      <div className="text-center mt-10">
        <h1 className="text-3xl font-gmarket font-bold text-black">
          성별을 선택해 주세요.
        </h1>
        <p className="text-gray-600 mt-2 text-sm">
          성별에 따라 몸에 필요한 에너지가 달라져요!
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 mt-10 w-11/12">
        <button
          className="bg-white border border-gray-300 shadow rounded-lg py-4 text-black text-lg"
          onClick={() => handleGenderSelect("남자")}
        >
          남자
        </button>
        <button
          className="bg-white border border-gray-300 shadow rounded-lg py-4 text-black text-lg"
          onClick={() => handleGenderSelect("여자")}
        >
          여자
        </button>
      </div>
    </div>
  );
};

export default SignUp1;
