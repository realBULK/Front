import { useState, useEffect } from 'react'

interface QuestionSmallButtonProps {
  text: string
  selected: boolean
  onSelectionChange: (item: string, isNowSelected: boolean) => void
}

const QuestionSmallButton: React.FC<QuestionSmallButtonProps> = ({ text, selected, onSelectionChange }) => {
  const [isSelected, setIsSelected] = useState(selected)

  useEffect(() => {
    setIsSelected(selected)
  }, [selected])

  const handleClick = () => {
    const newState = !isSelected
    setIsSelected(newState)
    onSelectionChange(text, newState)
  }

  return (
    <button
      onClick={handleClick}
      className={`flex h-[38px] px-[14px] py-[12px] justify-center items-center gap-x-[5px] gap-y-[7px] rounded-[15px] border 
        ${isSelected ? 'bg-[#DAE6CB]' : 'bg-[rgba(255,255,255,0.8)]'} 
        shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition-all duration-500 ease-in-out
        ${isSelected ? '' : 'hover:bg-[#DAE6CB]'} outline-none`}
    >
      {text}
    </button>
  )
}

export default QuestionSmallButton
