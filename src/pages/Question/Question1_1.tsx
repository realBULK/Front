import { FC } from 'react'
import ProgressBar from '../../components/ProgressBar'
import QuestionInputComponent from '../../components/QuestionInputComponent'
import NextButton from '../../components/NextButton'

interface InputQuestionProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  inputs: string[]
  navigateTo: string
}

const InputQuestion: FC<InputQuestionProps> = ({ progress, bigQuestion, smallQuestion, inputs, navigateTo }) => {
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
      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {smallQuestion}
      </div>
      <div className="flex flex-col w-full gap-[2.35vh] mb-[5vh]">
        {inputs.map((placeholder, idx) => (
          <QuestionInputComponent key={idx} placeholder={placeholder} />
        ))}
      </div>
      <div className="flex flex-row justify-end items-center w-full gap-[2.35vh]">
        <NextButton text="다음" navigateTo={navigateTo} />
      </div>
    </div>
  )
}

export default InputQuestion
