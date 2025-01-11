import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SignUp4: React.FC = () => {
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
      }
    }, 30); 

    // 3초 후 다음 페이지로 이동
    const timer = setTimeout(() => {
      navigate("/signup5");
    }, 3000);


    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col items-center bg-blue-50 font-pretendard px-6">
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
        <h1 className="font-[GmarketSansWeight] text-[32px] font-[GmarketSansWeight] text-black whitespace-pre-line leading-9">
          {nickname}님을 위한 식단을{"\n"}추천하는 중입니다
        </h1>
      </div>

  
      <div className="mt-12 ml-28 flex flex-col gap-6 w-full max-w-md">
        {/* 첫 번째 항목 */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-blue-500"></div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
            중량을 위한 효율적인 방법 계산 중
          </p>
        </div>

        {/* 두 번째 항목 (절반 색칠) */}
        <div className="flex items-center gap-3">
          <div className="relative w-4 h-4">
            <div className="absolute w-4 h-4 bg-gray-300 rounded-full"></div>
            <div className="absolute w-2 h-4 bg-blue-500 rounded-l-full"></div>
          </div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
            하루 목표 칼로리 계산 중
          </p>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
            건강을 위한 영양 지표 도출 중
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp4;
