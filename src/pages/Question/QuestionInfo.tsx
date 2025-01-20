//import ProgressBar from './../../components/ProgressBar'
import StepProgressBar from './../../components/StepProgressBar'

interface QuestionInfoProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  children?: React.ReactNode
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ progress, bigQuestion, smallQuestion, children }) => {
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[4.07%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <StepProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center w-[90%] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[4.05vh] pl-[4%]">
        {bigQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh] pl-[8%]">
        {smallQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh] pl-[4%]">
        {children}
      </div>
    </div>
  )
}

export default QuestionInfo
