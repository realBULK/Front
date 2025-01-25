import { useNavigate } from 'react-router-dom'

interface QuestionButtonComponentProps {
  text: string
  navigateTo: string
  navigateTF?: boolean
  onClick?: any
  disabled?: boolean
}

const BigGrayButton: React.FC<QuestionButtonComponentProps> = ({
  text,
  navigateTo,
  navigateTF = true,
  disabled = false,
  onClick,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick()
    if (navigateTF) navigate(`/${navigateTo}`)
  }

  return disabled === false ? (
    <button
      className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#D1D1D1] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] filter-none mb-3 transition-colors hover:bg-[#DAE6CB]"
      style={{ boxShadow: `0px 2px 5px -2px rgba(0, 0, 0, 0.25)` }}
      onClick={handleClick}
    >
      {text}
    </button>
  ) : (
    <button
      className="w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold text-[#191919] text-center rounded-[15px] bg-[#D1D1D1] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] filter-none mb-3 transition-colors"
      style={{ boxShadow: `0px 2px 5px -2px rgba(0, 0, 0, 0.25)` }}
    >
      {text}
    </button>
  )
}

export default BigGrayButton
