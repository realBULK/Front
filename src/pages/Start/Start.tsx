import logo from '../../assets/BULK.svg'
import { useNavigate } from 'react-router-dom'
import KakaoIcon from "../../assets/kakao.svg"
import AppleIcon from '../../assets/apple.svg'

const Start = () => {
  const navigate = useNavigate()

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <img src={logo} alt="Logo" className="w-[334.21px] h-[178.66px] mb-[75px] mt-[15%]" />

        <button
          className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center mb-[35px]"
          style={{
            borderRadius: '100px',
            border: '1px solid #EDEDED',
            background: 'rgba(255, 255, 255, 0.80)',
            boxShadow: '0px 2px 5px -2px rgba(0, 0, 0, 0.25)',
          }}
          onClick={() => navigate('/questionstart')}
        >
          맞춤 식단 받아보기
        </button>

        <div className="flex items-center w-[327px]">
          <hr className="flex-1 border-[#535353]" />
          <span className="mx-4 text-[14px] text-[#535353]" >또는</span>
          <hr className="flex-1 border-[#535353]" />
        </div>


        <div className="mt-[35px] flex flex-col gap-2 w-full max-w-xs">
          <button
          className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#000000] text-center rounded-[200px] bg-[#FAE100] active:bg-[#998C17] flex items-center justify-center gap-1"
          style={{
            border: "1px solid #FFEB01",
          }}
          onClick={() => navigate("kakao")}
        >
          <img
            src={KakaoIcon}
            alt="Kakao Icon"
            className="w-5 h-5"
          />
          카카오로 계속하기
        </button>

            <button
              className="w-[327px] h-[57px] text-[16px] font-[Pretendard] font-semibold text-[#FFFFFF] text-center rounded-[200px] bg-[#000000] flex items-center justify-center gap-1"
              style={{
                border: "1px solid #000000",
              }}
              onClick={() => navigate("apple")}
            >
              <img
            src={AppleIcon}
            alt="Apple Icon"
            className="w-5 h-5"
          />
              Apple로 계속하기
            </button>
          </div>
      </div>
    </div>
  )
}

export default Start
