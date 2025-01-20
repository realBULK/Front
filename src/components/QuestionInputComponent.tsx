import { useState } from 'react'

interface QuestionComponentProps {
  placeholder: string
}

const QuestionInputComponent: React.FC<QuestionComponentProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] px-4 shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition-colors 
        ${isFocused ? 'bg-[#DAE6CB]' : 'bg-[rgba(255,255,255,0.8)]'} outline-none`}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  )
}

export default QuestionInputComponent
