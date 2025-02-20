import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/BULK.svg";
import BigWhiteButton from "../../components/BigWhiteButton";

const Start = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    // 로컬 스토리지에서 토큰 확인하여 로그인 여부 설정
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // 토큰 삭제
    setIsLoggedIn(false);
    alert("로그아웃 되었습니다.");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-[252px] h-[135px] mb-[36px] mt-[15%]"
        />

        {/* 로그인되지 않은 경우에만 맞춤 식단 버튼 표시 */}
        {!isLoggedIn && (
          <BigWhiteButton text="맞춤 식단 받아보기" navigateTo="questionstart" />
        )}

        {isLoggedIn ? (
          <>
            <button
              onClick={() => navigate("/home")}
              className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center mb-[35px] rounded-full border border-[#EDEDED] bg-white/80 shadow-md hover:bg-[#BDBDBD]"
            >
              홈
            </button>
            <button
              onClick={handleLogout}
              className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center mb-[35px] rounded-full border border-[#EDEDED] bg-white/80 shadow-md hover:bg-[#BDBDBD]"
            >
              로그아웃
            </button>
          </>
        ) : (
          <BigWhiteButton text="로그인" navigateTo="login" />
        )}
      </div>
    </div>
  );
};

export default Start;
