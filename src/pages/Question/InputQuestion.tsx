import QuestionInfo from './QuestionInfo'
import QuestionInputComponent from './../../components/QuestionInputComponent'
import BigGrayButton from './../../components/BigGrayButton'

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

      <div className="flex flex-row justify-end items-center w-full mt-[3.39vh]">
        <BigGrayButton text="다음" navigateTo={nextPage} />
      </div>
    </QuestionInfo>
  )
}

export default InputQuestion
