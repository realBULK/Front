import ProgressBar from './../../components/ProgressBar'

interface QuestionInfoProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  children?: React.ReactNode
}

const QuestionInfo: React.FC<QuestionInfoProps> = ({ progress, bigQuestion, smallQuestion, children }) => {
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        {bigQuestion}
      </div>

      <div className="text-[#191919] font-semibold text-[16px] font-[pretendard] leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {smallQuestion}
      </div>
      {children}
    </div>
  )
}

export default QuestionInfo
