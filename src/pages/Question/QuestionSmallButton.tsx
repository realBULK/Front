interface QuestionSmallButtonProps {
  text: string
}

const QuestionSmallButton: React.FC<QuestionSmallButtonProps> = ({ text }) => {
  return (
    <button className="flex h-[38px] px-[19px] py-[12px] justify-center items-center gap-[10px] rounded-[15px] border border-[#EDEDED] bg-[rgba(255,255,255,0.8)] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition hover:bg-[#f0f4ff]">
      {text}
    </button>
  )
}

export default QuestionSmallButton
