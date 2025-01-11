import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from './QuestionButtonComponent'

const Question1_2 = () => {
  const navigate = useNavigate()
  const nextPage: string = 'question2_2'

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={50} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        식습관에 대해
        <br />
        알려주세요!
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        평소 식사를 몇 끼 하시나요?
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        <QuestionButtonComponent text="1끼" navigateTo={nextPage} />
        <QuestionButtonComponent text="2끼" navigateTo={nextPage} />
        <QuestionButtonComponent text="3끼" navigateTo={nextPage} />
        <QuestionButtonComponent text="4끼" navigateTo={nextPage} />
      </div>
    </div>
  )
}

export default Question1_2
