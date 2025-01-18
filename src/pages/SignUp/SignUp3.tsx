import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp3: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (navigateTo: string) => {
    navigate(`/${navigateTo}`);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
      {/* Circular Progress */}
      <div className="mt-36 w-[148px] h-[148px] flex items-center justify-center">
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#445AFF" }} // 동그라미 배경색 설정
        >
          <span className="text-white text-[16px] font-bold">100</span>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-8 w-full max-w-md">
        <h1 className="text-[32px] font-[GmarketSansWeight] text-black whitespace-pre-line leading-9">
          식단 추천이{"\n"}완료 되었습니다
        </h1>
        <p className="font-semibold font-[pretendard] mt-4 whitespace-pre-line text-[16px]">
          3초 안에 회원가입하고{"\n"}추천된 식단을 확인해 보세요
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-12 flex flex-col gap-2 w-full max-w-xs">
        <button
          className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter mb-3"
          style={{
            boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
          }}
          onClick={() => handleNavigation("kakao")}
        >
          카카오로 계속하기
        </button>
        <button
          className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter"
          style={{
            boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
          }}
          onClick={() => handleNavigation("apple")}
        >
          Apple로 계속하기
        </button>
      </div>
    </div>
  );
};

export default SignUp3;
