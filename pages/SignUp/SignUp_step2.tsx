import React from "react";

const SignUp2: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-primary font-pretendard">
      <h1 className="text-4xl font-gmarket font-bold text-black">
        출생 연도를 입력해 주세요.
      </h1>
      <p className="text-gray-600 mt-4 text-base">
        나이에 따라 하루 에너지가 달라져요!
      </p>
    </div>
  );
};

export default SignUp2;
