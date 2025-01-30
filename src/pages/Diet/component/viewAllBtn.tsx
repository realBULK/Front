import React from 'react'

interface ViewAllButtonProps {
  onClick?: () => void
}

const ViewAllButton: React.FC<ViewAllButtonProps> = ({ onClick }) => {
  return (
    <button
      className="flex items-center gap-1 text-[#6D6D6D] text-center text-sm not-italic font-medium leading-[100%] tracking-[-0.28px]"
      onClick={onClick}
    >
      전체보기
      <img src="/src/assets/back.svg" alt="back" className="w-3 h-3" />
    </button>
  )
}

export default ViewAllButton
