interface QuestionComponentProps {
  placeholder: string
}

const QuestionInputComponent: React.FC<QuestionComponentProps> = ({ placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] bg-[rgba(255,255,255,0.8)] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] px-4 transition-colors
      hover:border-[#445AFF]"
    />
  )
}

export default QuestionInputComponent
