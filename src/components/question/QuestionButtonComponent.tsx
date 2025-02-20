import React from 'react'

interface QuestionButtonComponentProps {
  text: string
  isSelected: boolean
  onClick: () => void
}

const QuestionButtonComponent: React.FC<QuestionButtonComponentProps> = ({ text, isSelected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-[327px] h-[55px]
        rounded-[15px]
        border border-[#EDEDED]
        px-[20px] text-left
        font-pretendard
        text-[14px] font-semibold
        leading-[100%]
        tracking-[-0.32px]
        shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)]
        transition-colors
        outline-none
        ${isSelected ? 'bg-[#DAE6CB] cursor-pointer' : 'bg-[rgba(255,255,255,0.8)] hover:bg-[#DAE6CB] cursor-pointer'}
      `}
    >
      {text}
    </button>
  )
}

export default QuestionButtonComponent
