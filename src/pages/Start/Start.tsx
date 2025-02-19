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
