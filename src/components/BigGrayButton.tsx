import { useNavigate } from 'react-router-dom'

interface QuestionButtonComponentProps {
  text: string
  navigateTo: string
  navigateTF?: boolean
  onClick?: any
  disabled?: boolean
  isPink?: boolean
}

const BigGrayButton: React.FC<QuestionButtonComponentProps> = ({
  text,
  navigateTo,
  navigateTF = true,
  disabled = false,
  onClick,
  isPink = false,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) onClick()
    if (navigateTF) navigate(`/${navigateTo}`)
  }

  const colorClasses = isPink ? 'hover:bg-[#F2E1DA] active:bg-[#CEB6AD]' : 'hover:bg-[#DAE6CB] active:bg-[#ACB99C]'

  return disabled === false ? (
    <button
      className={`
        w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold 
        text-[#191919] text-center rounded-[15px] bg-[#D1D1D1] 
        shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] filter-none mb-3 
        transition-colors
        ${colorClasses}
      `}
      style={{ boxShadow: `0px 2px 5px -2px rgba(0, 0, 0, 0.25)` }}
      onClick={handleClick}
    >
      {text}
    </button>
  ) : (
    <button
      className="
        w-[327px] h-[58px] text-[16px] font-[Pretendard] font-semibold 
        text-[#191919] text-center rounded-[15px] bg-[#D1D1D1] 
        shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] filter-none mb-3 
        transition-colors
      "
      style={{ boxShadow: `0px 2px 5px -2px rgba(0, 0, 0, 0.25)` }}
    >
      {text}
    </button>
  )
}

export default BigGrayButton
