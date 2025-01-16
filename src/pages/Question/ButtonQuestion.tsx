import { FC } from 'react'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from '../../components/QuestionButtonComponent'

interface ButtonQuestionProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  options: string[]
  navigateTo: string
}

const ButtonQuestion: FC<ButtonQuestionProps> = ({ progress, bigQuestion, smallQuestion, options, navigateTo }) => {
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        {bigQuestion.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {smallQuestion}
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        {options.map((option, idx) => (
          <QuestionButtonComponent key={idx} text={option} navigateTo={navigateTo} />
        ))}
      </div>
    </div>
  )
}

export default ButtonQuestion
