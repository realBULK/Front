import { useState, useEffect } from 'react'
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

  useEffect(() => {
    setInputValues(Array(inputs.length).fill(''))
    setValidStates(Array(inputs.length).fill(false))
  }, [id])

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
    if (id === 1) {
      localStorage.setItem('height', inputValues[0] || '')
      localStorage.setItem('weight', inputValues[1] || '')
    } else if (id === 2) {
      localStorage.setItem('goal_weight', inputValues[0] || '')
    }
    setInputValues(Array(inputs.length).fill(''))
  }

  const isFormValid = validStates.every((valid) => valid === true)

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col overflow-x-hidden relative">
      <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
        <div className="flex flex-col gap-[2.35vh]">
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
      </QuestionInfo>

      <div className="absolute bottom-[10px] w-full flex justify-center">
        <BigGrayButton text="다음" navigateTo={nextPage} onClick={handleClick} disabled={!isFormValid} />
      </div>
    </div>
  )
}

export default InputQuestion
