import { useNavigate } from 'react-router-dom'

interface QuestionButtonComponentProps {
  text: string
  navigateTo: string
  navigateTF?: boolean
  datatype: string
}

const QuestionButtonComponent: React.FC<QuestionButtonComponentProps> = ({
  text,
  navigateTo,
  datatype,
  navigateTF = true,
}) => {
  const navigate = useNavigate()
  const dataName = datatype

  const handleClick = () => {
    if (navigateTF === true) {
      navigate(`/${navigateTo}`)
    }
    console.log('localStorage저장:' + dataName + '  ' + text)
    localStorage.setItem(dataName, text)
  }

  return (
    <button
      onClick={handleClick}
      className="w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] bg-[rgba(255,255,255,0.8)] px-[20px] text-left text-[#191919] font-pretendard text-[14px] font-semibold leading-[100%] tracking-[-0.32px] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition-colors
      hover:bg-[#DAE6CB]"
    >
      {text}
    </button>
  )
}

export default QuestionButtonComponent
