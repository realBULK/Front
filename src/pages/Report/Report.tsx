import WeightProgressChart from '@/pages/Report/ReportGraph/graph'

const Report: React.FC = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen pt-10 pb-10 pr-8 pl-8">
      <div className="text-[#191919] text-[32px] not-italic font-medium leading-[125%] tracking-[-0.64px] font-[GmarketSansWeight]">
        <span className="text-[#8BBEB9]">균형 잡힌 식단</span>
        <span>으로</span>
        <p>목표 체중 달성하기</p>
      </div>
      <WeightProgressChart />
    </div>
  )
}

export default Report
