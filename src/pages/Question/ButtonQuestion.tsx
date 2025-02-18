import { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import QuestionInfo from './QuestionInfo'
import QuestionButtonComponent from '../../components/QuestionButtonComponent'
import BigGrayButton from '../../components/BigGrayButton'

interface SpecialButtonProps {
  text: string
  navigateTo: string
}

interface ButtonQuestionProps {
  progress: number
  datatype: string
  bigQuestion: string
  smallQuestion: string
  options?: string[]
  navigateTo?: string
  specialButton?: SpecialButtonProps
}

function strCut(str: string) {
  const index = str.indexOf('(')
  return index === -1 ? str.trim() : str.substring(0, index).trim()
}

const ButtonQuestion: FC<ButtonQuestionProps> = ({
  datatype,
  progress,
  bigQuestion,
  smallQuestion,
  options,
  navigateTo,
  specialButton,
}) => {
  const navigate = useNavigate()
  const [selectedIndex, setSelectedIndex] = useState<number>(-1)
  const isFinalPage = progress === 100 && specialButton

  useEffect(() => {
    setSelectedIndex(-1)
  }, [progress])

  const handleButtonClick = (index: number, text: string) => {
    const formattedText = strCut(text)
    localStorage.setItem(datatype, formattedText)
    setSelectedIndex(index)

    if (!isFinalPage && navigateTo) {
      navigate(`/${navigateTo}`)
    }
  }

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col relative">
      <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
        <div className="flex flex-col gap-[2.35vh] px-4 pt-4">
          {options?.map((option, idx) => (
            <QuestionButtonComponent
              key={idx}
              text={option}
              isSelected={idx === selectedIndex}
              onClick={() => handleButtonClick(idx, option)}
            />
          ))}
        </div>
      </QuestionInfo>

      <div className="flex-grow overflow-y-auto" />

      <div className="absolute bottom-[10px] left-0 right-0 flex justify-center">
        {specialButton && (
          <BigGrayButton
            text={specialButton.text}
            navigateTo={specialButton.navigateTo}
            disabled={selectedIndex === -1}
          />
        )}
      </div>
    </div>
  )
}

export default ButtonQuestion
