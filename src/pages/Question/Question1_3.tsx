import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import NextButton from '../../components/NextButton'
import QuestionInputComponent from '@/components/QuestionInputComponent'

const Question1_3 = () => {
  const navigate = useNavigate()

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

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        목표 몸무게를 알려주세요.
      </div>

      <div className="flex flex-col  w-full gap-[2.35vh] mb-[5vh]">
        <QuestionInputComponent placeholder="몸무게(kg)" />
      </div>

      <div className="flex flex-row justify-end items-center w-full gap-[2.35vh]">
        <NextButton text="다음" navigateTo="Question1_2"></NextButton>
      </div>
    </div>
  )
}

export default Question1_3
