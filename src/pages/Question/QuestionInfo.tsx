import StepProgressBar from './../../components/StepProgressBar'

interface QuestionInfoProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  children?: React.ReactNode
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ progress, bigQuestion, smallQuestion, children }) => {
  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center px-[4.07%] overflow-y-auto">
      <div className="flex justify-center mb-[3.17vh] mt-6">
        <StepProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center max-w-[320px] min-h-[89px] text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[4.05vh] text-left">
        {bigQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh] text-left">
        {smallQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {children}
      </div>
    </div>
  )
}

export default QuestionInfo
