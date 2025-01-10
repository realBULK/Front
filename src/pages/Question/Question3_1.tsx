import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from './QuestionButtonComponent'

const Question1_2 = () => {
  const navigate = useNavigate()
  const nextPage: string = 'question3_2'

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={75} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        라이프스타일에
        <br />
        대해 알려주세요!
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        식사 시간이 항상 규칙적인 편인가요?
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        <QuestionButtonComponent
          text="매우 규칙적 (아침, 점심, 저녁 시간을 항상 일정하게 지킴)"
          navigateTo={nextPage}
        />
        <QuestionButtonComponent text="보통 (대체로 규칙적이지만 가끔 변동 있음)" navigateTo={nextPage} />
        <QuestionButtonComponent text="불규칙적 (매일 식사 시간이 달라짐)" navigateTo={nextPage} />
      </div>
    </div>
  )
}

export default Question1_2
