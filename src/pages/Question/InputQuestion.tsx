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
      <div className="flex flex-col w-full min-h-[400px] gap-[2.35vh] flex-grow">
        {inputs.map((placeholder, idx) => (
          <QuestionInputComponent key={idx} placeholder={placeholder} />
        ))}
      </div>

      <div className="absolute bottom-[3.87vh] w-full flex-row justify-center">
        <BigGrayButton text="다음" navigateTo={nextPage} />
      </div>
    </QuestionInfo>
  )
}

export default InputQuestion
