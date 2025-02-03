import { useState} from "react";
import logo from '../../assets/BULK.svg'
import { useNavigate } from 'react-router-dom'
import KakaoIcon from '../../assets/kakao.svg'
import AppleIcon from '../../assets/apple.svg'
import BigWhiteButton from '../../components/BigWhiteButton'
import SkeletonStart from "./SkeletonStart";

const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

const Start = () => {
  const navigate = useNavigate()

  const [isLoading] = useState(false);

  const handleKakaoLogin = () => {
    // Kakao 로그인 URL 생성
    const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
    // 해당 URL로 리다이렉트
    window.location.href = kakaoLoginUrl;
  };
  
  if (isLoading) {
    return <SkeletonStart/>;
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-[252px] h-[135px] mb-[75px] mt-[15%]" />
        <BigWhiteButton text="맞춤 식단 받아보기" navigateTo="questionstart"></BigWhiteButton>
        <div className="flex items-center w-[327px]">
          <hr className="flex-1 border-[#535353]" />
          <span className="mx-4 text-[14px] text-[#535353]">또는</span>
          <hr className="flex-1 border-[#535353]" />
        </div>

        <div className="mt-[35px] flex flex-col gap-2 w-full">
          <button
            className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex items-center justify-center gap-1 hover:bg-[#ffd900]"
            style={{
              border: '1px solid #FAE100',
            }}
            onClick={handleKakaoLogin}
          >
            <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
            카카오로 계속하기
          </button>

          <button
            className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1 hover:bg-[#212121]"
            style={{
              border: '1px solid #000000',
            }}
            onClick={() => navigate('apple')}
          >
            <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
            Apple로 계속하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Start
