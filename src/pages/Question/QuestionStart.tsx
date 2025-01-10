import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const QuestionStart = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/question1_1')
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="bg-[#EDEFFE] w-[393px] h-[852px] flex flex-col items-start pl-[86px] pt-[189px]">
      <div className="w-[280px] text-black text-justify font-pretendard text-[24px] font-semibold leading-[121%] ">
        안녕하세요!
        <br /> BULK에 오신 것을 환영해요.
        <br /> 몇가지 질문을 통해, ----
      </div>
      <img className="mt-[48px]" src="character2.png" alt="벌크캐릭터"></img>
    </div>
  )
}

export default QuestionStart
