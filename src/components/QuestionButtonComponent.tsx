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

  // 문자열에서 '(' 이전의 문자열만 추출
  function strCut(str: string | undefined | null): string {
    if (!str) {
      console.error("Error: 'text' is null or undefined.")
      return '' // 빈 문자열 반환
    }
    const index = str.indexOf('(')
    return index === -1 ? str.trim() : str.substring(0, index).trim()
  }

  const handleClick = () => {
    if (!text) {
      console.error("Error: 'text' is null or undefined.")
      return
    }

    if (navigateTF) {
      navigate(`/${navigateTo}`)
    }

    const formattedText = strCut(text)
    console.log(`localStorage 저장: ${dataName} -> ${formattedText}`)

    try {
      localStorage.setItem(dataName, formattedText)
    } catch (error) {
      console.error('Error storing data to localStorage:', error)
    }
  }

  return (
    <button
      onClick={handleClick}
      className="w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] 
      bg-[rgba(255,255,255,0.8)] px-[20px] text-left text-[#191919] 
      font-pretendard text-[14px] font-semibold leading-[100%] 
      tracking-[-0.32px] shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] 
      transition-colors hover:bg-[#DAE6CB] outline-none"
    >
      {text || '기본값'}
    </button>
  )
}

export default QuestionButtonComponent
