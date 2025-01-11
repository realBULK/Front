import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Question1_1 = () => {
  const navigate = useNavigate()

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigate('/Question1_2')
  //   }, 4000)

  //   return () => clearTimeout(timer)
  // }, [navigate])

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start items-center">
      <div className="w-full text-black text-justify font-pretendard text-[22px] font-semibold leading-[121%] tracking-[-1px] px-[10%] pt-[22.18vh] pl-[21.89%]">
        안녕하세요!
        <br /> BULK에 오신 것을 환영해요.
        <br /> 몇가지 질문을 통해,
        <br /> ----
        <img className="mt-[48px] mb-[100px]" src="character2.png" alt="벌크캐릭터" />
      </div>

      <button
        className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter mb-3"
        style={{
          boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
        }}
        onClick={() => navigate('/question1_1')}
      >
        BULK 시작하기
      </button>
    </div>
  )
}

export default Question1_1
