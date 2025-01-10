import { useNavigate } from 'react-router-dom'
import ProgressBar from '../../components/ProgressBar'
import QuestionSmallButton from './QuestionSmallButton'

const Question1_2 = () => {
  const navigate = useNavigate()

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
        평소 즐겨 먹는 음식을 알려주세요.
      </div>

      <div className="flex flex-col gap-[2.35vh] w-full">
        <div className="mb-[1.5vh]">
          <div className="text-[#191919] font-semibold mb-[1vh]">채소</div>
          <div className="flex flex-wrap gap-[10px]">
            <QuestionSmallButton text="브로콜리" />
            <QuestionSmallButton text="콜리플라워" />
            <QuestionSmallButton text="양파" />
            <QuestionSmallButton text="피망" />
            <QuestionSmallButton text="가지" />
            <QuestionSmallButton text="오이" />
            <QuestionSmallButton text="토마토" />
            <QuestionSmallButton text="아스파라거스" />
          </div>
        </div>

        <div className="mb-[1.5vh]">
          <div className="text-[#191919] font-semibold mb-[1vh]">곡물</div>
          <div className="flex flex-wrap gap-[10px]">
            <QuestionSmallButton text="쌀" />
            <QuestionSmallButton text="퀴노아" />
            <QuestionSmallButton text="메밀" />
            <QuestionSmallButton text="옥수수 가루" />
          </div>
        </div>

        <div className="mb-[1.5vh]">
          <div className="text-[#191919] font-semibold mb-[1vh]">재료</div>
          <div className="flex flex-wrap gap-[10px]">
            <QuestionSmallButton text="아보카도" />
            <QuestionSmallButton text="콩" />
            <QuestionSmallButton text="우유" />
            <QuestionSmallButton text="달걀" />
            <QuestionSmallButton text="치즈" />
            <QuestionSmallButton text="단백질 파우더" />
            <QuestionSmallButton text="두부" />
            <QuestionSmallButton text="버섯" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question1_2
