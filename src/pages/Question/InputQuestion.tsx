import { useState } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionInputComponent from './../../components/QuestionInputComponent'
import BigGrayButton from './../../components/BigGrayButton'

interface InputQuestionProps {
  id: number
  datatype: string
  progress: number
  bigQuestion: string
  smallQuestion: string
  inputs: string[]
  nextPage: string
}

const InputQuestion: React.FC<InputQuestionProps> = ({
  id,
  progress,
  bigQuestion,
  smallQuestion,
  inputs,
  nextPage,
}) => {
  const [inputValues, setInputValues] = useState<string[]>(Array(inputs.length).fill(''))
  const [validStates, setValidStates] = useState<boolean[]>(Array(inputs.length).fill(false))

  const handleInputChange = (index: number, value: string) => {
    setInputValues((prevValues) => {
      const newValues = [...prevValues]
      newValues[index] = value
      return newValues
    })
  }

  const handleValidationChange = (index: number, isValid: boolean) => {
    setValidStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = isValid
      return newStates
    })
  }

  const handleClick = () => {
    console.log('입력된 값:', inputValues)

    if (id === 1) {
      localStorage.setItem('height', inputValues[0] || '')
      localStorage.setItem('weight', inputValues[1] || '')
    } else if (id === 2) {
      localStorage.setItem('goal_weight', inputValues[0] || '')
    }
  }

  const isFormValid = validStates.every((valid) => valid === true)

  return (
    <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
      <div className="flex flex-col w-full min-h-[400px] gap-[2.35vh] flex-grow">
        {inputs.map((placeholder, idx) => (
          <QuestionInputComponent
            key={idx}
            placeholder={placeholder}
            value={inputValues[idx]}
            onChange={(value) => handleInputChange(idx, value)}
            setValid={(isValid) => handleValidationChange(idx, isValid)}
          />
        ))}
      </div>

      <div className="absolute bottom-[3.87vh] w-full flex-row justify-center">
        <BigGrayButton text="다음" navigateTo={nextPage} onClick={handleClick} disabled={!isFormValid} />
      </div>
    </QuestionInfo>
  )
}

export default InputQuestion
