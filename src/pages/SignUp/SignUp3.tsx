import { useNavigate } from "react-router-dom";
// import KakaoIcon from "../../assets/kakao.svg";
// import AppleIcon from "../../assets/apple.svg";


const SignUp3: React.FC = () => {
  const navigate = useNavigate();



 // ✅ 회원가입 버튼 클릭 시 `/signuppage`로 이동
 const handleSignup = () => {
  navigate("/signuppage");};

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
        {/* <button className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold 
        text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex 
        items-center justify-center gap-1"
          style={{ border: "1px solid #FFEB01" }}
          onClick={handleKakaoLogin}
        >
          <img src={KakaoIcon} alt="Kakao Icon" className="w-5 h-5" />
          카카오로 계속하기
        </button> */}



          <button
            type="submit"
            className="w-full p-3 bg-[#DAE6CB] text-white rounded-lg hover:bg-[#ACB99C] transition" onClick={handleSignup}
          >
            회원가입
          </button>

        {/* <button className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold 
        text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
          style={{ border: "1px solid #000000" }}
          onClick={() => navigate("/apple")}
        >
          <img src={AppleIcon} alt="Apple Icon" className="w-5 h-5" />
          Apple로 계속하기
        </button> */}
      </div>
    </div>
  );
};

export default SignUp3;
