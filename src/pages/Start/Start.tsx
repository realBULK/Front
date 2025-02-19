// import { useState } from "react";
// import logo from '../../assets/BULK.svg'
// import { useNavigate } from 'react-router-dom'
// import KakaoIcon from '../../assets/kakao.svg'
// import AppleIcon from '../../assets/apple.svg'
// import BigWhiteButton from '../../components/BigWhiteButton'

// const Start = () => {
//   const navigate = useNavigate();

//   const CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;
//   const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

//   const [showModal, setShowModal] = useState(false);

//   const checkUserData = () => {
//     const data = {
//       nickname: localStorage.getItem("nickname"),
//       height: localStorage.getItem("height"),
//       weight: localStorage.getItem("weight"),
//       goalWeight: localStorage.getItem("goal_weight"),
//       activityLevel: localStorage.getItem("activity_level"),
//       mealNumber: localStorage.getItem("meal_number"),
//       cookTime: localStorage.getItem("cook_time"),
//       deliveryNum: localStorage.getItem("delivery_num"),
//       mealTime: localStorage.getItem("meal_time"),
//       eatingOut: localStorage.getItem("eating-out"),
//       favoriteFood: localStorage.getItem("favorite_food"),
//     };

//     return Object.values(data).some(value => value === null || value === "null" || value === "0" || value === "");
//   };

//   const handleKakaoLogin = () => {
//     if (checkUserData()) {
//       setShowModal(true); // 모달 표시
//       return;
//     }

//     const kakaoLoginUrl = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;
//     window.location.href = kakaoLoginUrl;
//   };

//   return (
//     <div className="flex items-center justify-center h-screen">
//       <div className="flex flex-col items-center">
//         <img src={logo} alt="Logo" className="w-[252px] h-[135px] mb-[36px] mt-[15%]" />
//         <BigWhiteButton text="맞춤 식단 받아보기" navigateTo="questionstart"></BigWhiteButton>
//         <div className="flex items-center w-[327px]">
//           <hr className="flex-1 border-[#A4A4A4]" />
//           <span className="mx-4 text-[14px] text-[#A4A4A4]">또는</span>
//           <hr className="flex-1 border-[#A4A4A4]" />
//         </div>

//         <div className="mt-[35px] flex flex-col gap-2 w-full">
//           <button
//             className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex items-center justify-center gap-1"
//             style={{
//               border: '1px solid #FAE100',
//             }}
//             onClick={handleKakaoLogin}
//           >
//             <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
//             카카오로 계속하기
//           </button>

//           <button
//             className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
//             style={{
//               border: '1px solid #000000',
//             }}
//             onClick={() => navigate('apple')}
//           >
//             <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
//             Apple로 계속하기
//           </button>
//         </div>
//       </div>

//       {/* 모달 */}
//       {showModal && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-[320px] text-center relative">
//             {/* 닫기 버튼 */}
//             <button
//               className="absolute top-[1%] right-[4%] text-gray-500 hover:text-gray-700 text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               &times;
//             </button>

//             <h2 className="font-[Pretendard] text-[20px] font-semibold">회원가입을 먼저 진행해주세요.</h2>
//             <p className="text-[14px] font-[Pretendard] mt-2 text-gray-600">카카오로 회원가입한 기록이 없습니다.</p>

//             <button
//               className="font-[Pretendard] mt-4 bg-[#FAE100] active:bg-[#998C17] text-black px-4 py-2 rounded-lg w-full font-semibold flex items-center justify-center gap-1"
//               style={{
//                 border: '1px solid #FAE100',
//               }}
//               onClick={() => navigate("/questionstart")}
//             >
//               <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
//               카카오로 회원가입
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Start;

import logo from '../../assets/BULK.svg'
import BigWhiteButton from '../../components/BigWhiteButton'

const Start = () => {

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-[252px] h-[135px] mb-[36px] mt-[15%]" />
        <BigWhiteButton text="맞춤 식단 받아보기" navigateTo="questionstart"></BigWhiteButton>
        <BigWhiteButton text="로그인" navigateTo="login"></BigWhiteButton>
        {/* <div className="flex items-center w-[327px]">
          <hr className="flex-1 border-[#A4A4A4]" />
          <span className="mx-4 text-[14px] text-[#A4A4A4]">또는</span>
          <hr className="flex-1 border-[#A4A4A4]" />
        </div>

        <div className="mt-[35px] flex flex-col gap-2 w-full">
          <button
            className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex items-center justify-center gap-1"
            style={{
              border: '1px solid #FAE100',
            }}
            onClick={handleLogin}
          >
            <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
            카카오로 계속하기
          </button>

          <button
            className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
            style={{
              border: '1px solid #000000',
            }}
            onClick={() => navigate('apple')}
          >
            <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
            Apple로 계속하기
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Start;
