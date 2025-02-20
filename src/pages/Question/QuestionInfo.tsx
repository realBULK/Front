import StepProgressBar from '../../components/question/StepProgressBar'

interface QuestionInfoProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  children?: React.ReactNode
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ progress, bigQuestion, smallQuestion, children }) => {
  return (
    <div className="bg-[#F5F5F5] h-screen flex flex-col items-center px-[4.07%] overflow-y-auto">
      <div className="flex justify-center mb-[3.17vh] mt-6">
        <StepProgressBar progress={progress} />
      </div>

      {/* bigQuestion 왼쪽 정렬 */}
      <div className="whitespace-pre-line flex flex-col self-start max-w-[320px] min-h-[89px] text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[4.05vh] ml-[12%]">
        {bigQuestion}
      </div>

      {/* smallQuestion 왼쪽 정렬 */}
      <div className="whitespace-pre-line text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh] self-start ml-[12%]">
        {smallQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {children}
      </div>
    </div>
  )
}

export default QuestionInfo
