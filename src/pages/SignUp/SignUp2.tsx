import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp2: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { nickname = "회원" } = location.state || {};

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          navigate("/signup3");
        }, 500); 
      }
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, [navigate]);

  const getCircleState = (step: number) => {
    if (progress >= step * 33.33) {
      return "bg-blue-500"; 
    } else {
      return "bg-gray-300"; 
    }
  };

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      {/* Circular Progress */}
      <div className="mt-36 relative w-[148px] h-[148px] flex items-center justify-center">
        <img
          src="/Ellipse14.png"
          alt="Circular Progress"
          className="w-full h-full"
        />
        {/* 중앙 숫자 */}
        <span className="absolute text-black text-[16px] font-bold">
          {progress}
        </span>
      </div>

      {/* Title */}
<div className="text-center mt-8 w-full max-w-md">
  <h1 className="text-[#191919] text-center font-[GmarketSansWeight] text-[24px] leading-[39px] whitespace-pre-wrap">
    {nickname}님을 위한 맞춤형{"\n"}증량 식단을 준비하고 있습니다.
  </h1>
</div>


      <div className="mt-12 ml-28 flex flex-col gap-6 w-full max-w-md">
        {/* 첫 번째 항목 */}
        <div className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full ${getCircleState(1)}`}></div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
          사용자의 증량 목표와 라이프 스타일 분석 중
          </p>
        </div>

        {/* 두 번째 항목 */}
        <div className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full ${getCircleState(2)}`}></div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
          하루 권장 섭취 칼로리와 영양소 비율 계산 중
          </p>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-center gap-3">
          <div className={`w-4 h-4 rounded-full ${getCircleState(3)}`}></div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
          맞춤형 식단을 최적화 하여 준비 중
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp2;
