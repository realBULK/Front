import QuestionInfo from './QuestionInfo'
import QuestionInputComponent from './../../components/QuestionInputComponent'
import NextButton from './../../components/NextButton'

interface InputQuestionProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  inputs: string[]
  nextPage: string
}

const InputQuestion: React.FC<InputQuestionProps> = ({ progress, bigQuestion, smallQuestion, inputs, nextPage }) => {
  return (
    <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
      <div className="flex flex-col w-full gap-[2.35vh] mb-[5vh]">
        {inputs.map((placeholder, idx) => (
          <QuestionInputComponent key={idx} placeholder={placeholder} />
        ))}
      </div>

      <div className="flex flex-row justify-end items-center w-full gap-[2.35vh]">
        <NextButton text="다음" navigateTo={nextPage} />
      </div>
    </QuestionInfo>
  )
}

export default InputQuestion
