import { FC } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionButtonComponent from '../../components/QuestionButtonComponent'
import BigGrayButton from '../../components/BigGrayButton'

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
  return (
    <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
      <div className="flex flex-col gap-[2.35vh] min-h-[400px] w-full">
        {options?.map((option, idx) => (
          <QuestionButtonComponent key={idx} text={option} navigateTo={navigateTo || ''} />
        ))}

        {specialButton && (
          <div className="absolute bottom-[3.87vh] w-full flex-row justify-center">
            <BigGrayButton text={specialButton.text} navigateTo={specialButton.navigateTo} />
          </div>
        )}
      </div>
    </QuestionInfo>
  )
}

export default ButtonQuestion
