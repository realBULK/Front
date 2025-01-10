import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from './QuestionButtonComponent'

const Question1_2 = () => {
  const navigate = useNavigate()
  const nextPage: string = 'question4_1'

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

      <div className="text-[#191919] font-pretendard text-[15px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.50px] mb-[2.23vh]">
        주기적으로 밖에서 식사를 하는 상황이 있나요?
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        <QuestionButtonComponent text="거의 없음 (대부분 집이나 회사에서 식사)" navigateTo={nextPage} />
        <QuestionButtonComponent text="가끔 있음 (주 1-2회 정도 외식)" navigateTo={nextPage} />
        <QuestionButtonComponent text="자주 있음 (학교, 직장 등 외부에서 주로 식사)" navigateTo={nextPage} />
      </div>
    </div>
  )
}

export default Question1_2
