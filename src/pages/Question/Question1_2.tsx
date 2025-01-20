import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from './../../components/QuestionButtonComponent'

const Question1_2 = () => {
  const navigate = useNavigate()
  const nextPage: string = 'question2_1'

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
        현재의 활동량은 어느 정도인가요?
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        <QuestionButtonComponent text="낮음 (운동 거의 안함)" navigateTo={nextPage} />
        <QuestionButtonComponent text="보통 (주 1-2회 운동)" navigateTo={nextPage} />
        <QuestionButtonComponent text="높음 (주 3회 이상 운동)" navigateTo={nextPage} />
        <QuestionButtonComponent text="매우 높음 (매일 강도 높은 운동)" navigateTo={nextPage} />
      </div>
    </div>
  )
}

export default Question1_2
