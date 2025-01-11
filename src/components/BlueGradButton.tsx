import { useNavigate } from 'react-router-dom'

interface QuestionButtonComponentProps {
  text: string
  navigateTo: string
  navigateTF?: boolean
}

const QuestionButtonComponent: React.FC<QuestionButtonComponentProps> = ({ text, navigateTo, navigateTF = true }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (navigateTF === true) navigate(`/${navigateTo}`)
  }

  return (
    <button
      className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#CEDAFF] shadow-custom inset-shadow-custom filter mb-3 transition-colors duration-300 hover:bg-[#627DCF]"
      style={{
        boxShadow: `0px 0px 20px 2px #EDEFFE inset, 0px 2px 5px -2px rgba(0, 0, 0, 0.25)`,
      }}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default QuestionButtonComponent
