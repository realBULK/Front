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
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[22.18vh] pl-[21.89%]">
      <div className="w-full text-black text-justify font-pretendard text-[22px] font-semibold leading-[121%] tracking-[-1px]">
        안녕하세요!
        <br /> BULK에 오신 것을 환영해요.
        <br /> 몇가지 질문을 통해,
        <br /> ----
      </div>
      <img className="mt-[48px]" src="character2.png" alt="벌크캐릭터" />
    </div>
  )
}

export default Question1_1
