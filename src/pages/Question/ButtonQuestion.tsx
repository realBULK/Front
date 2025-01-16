import { FC } from 'react'
import ProgressBar from '../../components/ProgressBar'
import QuestionButtonComponent from '../../components/QuestionButtonComponent'
import BlueGradButton from '../../components/BlueGradButton'

interface SpecialButtonProps {
  text: string
  navigateTo: string
}

interface ButtonQuestionProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  options?: string[]
  navigateTo?: string
  specialButton?: SpecialButtonProps
}

const ButtonQuestion: FC<ButtonQuestionProps> = ({
  progress,
  bigQuestion,
  smallQuestion,
  options,
  navigateTo,
  specialButton,
}) => {
  //console.log(specialButton?.text)
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        {bigQuestion.split('\n').map((line, idx) => (
          <span key={idx}>
            {line}
            <br />
          </span>
        ))}
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {smallQuestion}
      </div>

      <div className="flex flex-col gap-[2%] w-full gap-[2.35vh]">
        {options?.map((option, idx) => (
          <QuestionButtonComponent key={idx} text={option} navigateTo={navigateTo || ''} />
        ))}

        {specialButton && (
          <div className="mt-[2.35vh]">
            <BlueGradButton text={specialButton.text} navigateTo={specialButton.navigateTo} />
          </div>
        )}
      </div>
    </div>
  )
}

export default ButtonQuestion
