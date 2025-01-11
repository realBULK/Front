import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from '../../components/QuestionButtonComponent'
import BlueGradButton from '../../components/BlueGradButton'

const Question4_2 = () => {
  const navigate = useNavigate()
  const nextPage: string = 'question4_2'

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={100} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        요리 습관에 대해
        <br />
        알려주세요!
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        배달 음식을 자주 이용하나요?
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh] mb-[6.57vh]">
        <QuestionButtonComponent text="자주" navigateTo={nextPage} navigateTF={false} />
        <QuestionButtonComponent text="가끔" navigateTo={nextPage} navigateTF={false} />
        <QuestionButtonComponent text="거의 안함" navigateTo={nextPage} navigateTF={false} />
      </div>
      <BlueGradButton text="나만의 식단 받아보기" navigateTo="signup"></BlueGradButton>
    </div>
  )
}

export default Question4_2
