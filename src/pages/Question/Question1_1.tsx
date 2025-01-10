import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionInputComponent from './QuestionInputComponent'

const Question1_1 = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/Question1_2')
    }, 4000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={25} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        000에 대해
        <br />
        알려주세요!
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        키와 몸무게를 입력해주세요.
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        <QuestionInputComponent placeholder="키(cm)" />
        <QuestionInputComponent placeholder="몸무게(kg)" />
      </div>
    </div>
  )
}

export default Question1_1
