import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import KakaoIcon from "../../assets/kakao.svg";
import AppleIcon from "../../assets/apple.svg";
import { useUserData, UserData } from "../../hooks/useUserData";
import axios from "axios";

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
  const { query, mutation } = useUserData(); // ✅ `useQuery` + `useMutation`
  const hasPatched = useRef(false); // 요청 중복 방지


  useEffect(() => {
    if (hasPatched.current || query.isLoading) return;
    hasPatched.current = true;

    if (!query.data) {
      // ✅ 유저 데이터가 없으면 로컬 데이터로 API 저장
      const data: LocalData = {
        nickname: localStorage.getItem("nickname") || null,
        height: localStorage.getItem("height") ? Number(localStorage.getItem("height")) : null,
        weight: localStorage.getItem("weight") ? parseFloat(localStorage.getItem("weight") || "0") : null,
        goalWeight: localStorage.getItem("goal_weight") ? Number(localStorage.getItem("goal_weight")) : null,
        activityLevel: localStorage.getItem("activity_level") || null,
        mealNumber: localStorage.getItem("meal_number") || null,
        cookTime: localStorage.getItem("cook_time") || null,
        deliveryNum: localStorage.getItem("delivery_num") || null,
        mealTime: localStorage.getItem("meal_time") || null,
        eatingOut: localStorage.getItem("eating-out") || null,
        favoriteFood: localStorage.getItem("favorite_food") || null,
      };

      // ✅ `null` 값을 API 요청에 맞게 변환
      const requestData: UserData = {
        nickname: data.nickname || "",
        height: data.height || 0,
        weight: data.weight || 0,
        goalWeight: data.goalWeight || 0,
        activityLevel: data.activityLevel || "",
        mealNumber: data.mealNumber || "",
        cookTime: data.cookTime || "",
        deliveryNum: data.deliveryNum || "",
        mealTime: data.mealTime || "",
        eatingOut: data.eatingOut || "",
        favoriteFood: data.favoriteFood || "",
      };

      mutation.mutate(requestData, {
        onSuccess: () => {
          console.log("✅ 데이터 업데이트 성공");
        },
        onError: (error) => {
          console.error("❌ 데이터 업데이트 실패:", error);
        },
      });
    }
  }, [query.data, query.isLoading, mutation]);

  // 🔹 카카오 로그인 URL로 이동
  const handleKakaoLogin = () => {
    const kakaoAuthUrl = `http://43.200.218.42:8080/oauth2/authorization/kakao`;
    window.location.href = kakaoAuthUrl;
  };

  // 🔹 카카오 로그인 후, 백엔드에 인가 코드 보내기
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      console.log("🔑 카카오 인가 코드:", authCode);
      
      axios.post("http://43.200.218.42:8080/api/auth/kakao/token", null, {
        params: { code: authCode }
      })
      .then((response) => {
        console.log("✅ 카카오 액세스 토큰 응답:", response.data);
        localStorage.setItem("access_token", response.data.access_token);
        navigate("/report"); // 🔹 로그인 후 페이지 이동
      })
      .catch((error) => {
        console.error("❌ 카카오 로그인 실패:", error);
      });
    }
  }, []);

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      {/* Circular Progress */}
      <div className="mt-36 w-[148px] h-[148px] flex items-center justify-center">
        <div className="w-full h-full rounded-full flex items-center justify-center"
          style={{ backgroundColor: "#DED1E8" }}>
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
        <button className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold 
        text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex 
        items-center justify-center gap-1"
          style={{ border: "1px solid #FFEB01" }}
          onClick={handleKakaoLogin}
        >
          <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
          카카오로 계속하기
        </button>

        <button className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold 
        text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
          style={{ border: "1px solid #000000" }}
          onClick={() => navigate("/apple")}
        >
          <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
          Apple로 계속하기
        </button>
      </div>
    </div>
  );
};

export default SignUp3;
