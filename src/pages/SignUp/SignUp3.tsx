import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import KakaoIcon from "../../assets/kakao.svg";
import AppleIcon from "../../assets/apple.svg";
import { useUserData } from "../../hooks/useUserData";


interface LocalData {
  nickname: string | null;
  height: number | null;
  weight: number | null;
  goalWeight: number | null;
  activityLevel: string | null;
  mealNumber: string | null;
  cookTime: string | null;
  deliveryNum: string | null;
  mealTime: string | null;
  eatingOut: string | null;
  favoriteFood: string | null;
}

const SignUp3: React.FC = () => {
  const navigate = useNavigate();
  const mutation = useUserData();
  const hasPatched = useRef(false); // 요청 중복 방지를 위한 플래그


  useEffect(() => {
    if (hasPatched.current) return; // 이미 실행된 경우, 더 이상 실행하지 않음
    hasPatched.current = true;

    // 로컬 스토리지에서 데이터 불러오기
    const data: LocalData = {
      nickname: localStorage.getItem("nickname") || null,
      height: localStorage.getItem("height") ? Number(localStorage.getItem("height")) : 0,
      weight: localStorage.getItem("weight") ? parseFloat(localStorage.getItem("weight") || "0") : 0,
      goalWeight: localStorage.getItem("goal_weight") ? Number(localStorage.getItem("goal_weight")) : null,
      activityLevel: localStorage.getItem("activity_level") || null,
      mealNumber: localStorage.getItem("meal_number") || null,
      cookTime: localStorage.getItem("cook_time") || null,
      deliveryNum: localStorage.getItem("delivery_num") || null,
      mealTime: localStorage.getItem("meal_time") || null,
      eatingOut: localStorage.getItem("eating-out") || null,
      favoriteFood: localStorage.getItem("favorite_food") || null,
    };

    console.log("로컬 데이터 로드:", data);

    // 데이터가 유효할 경우 API 호출
    mutation.mutate(data, {
      onSuccess: () => {
        console.log("데이터가 성공적으로 업데이트되었습니다!");
      },
      onError: (error) => {
        console.error("API 요청 중 에러 발생:", error);
      },
    });
  }, [mutation]);

  const handleKakaoLogin = async () => {
    const kakaoLoginUrl = `http://43.200.218.42:8080`;
    window.location.href = kakaoLoginUrl; // 카카오 인증 URL로 리다이렉트
  };

  const handleNavigation = (navigateTo: string) => {
    navigate(`/${navigateTo}`);
  };

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      {/* Circular Progress */}
      <div className="mt-36 w-[148px] h-[148px] flex items-center justify-center">
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#DED1E8" }}
        ></div>
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
          className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex items-center justify-center gap-1"
          style={{
            border: "1px solid #FFEB01",
          }}
          onClick={handleKakaoLogin}
        >
          <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
          카카오로 계속하기
        </button>

        <button
          className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
          style={{
            border: "1px solid #000000",
          }}
          onClick={() => handleNavigation("apple")}
        >
          <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
          Apple로 계속하기
        </button>
      </div>
    </div>
  );
};

export default SignUp3;
