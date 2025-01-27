import WeightProgressChart from '@/pages/Report/ReportGraph/graph'
import NutrientsBox from '@/pages/Report/ReportGraph/nutrient'
import { useNavigate } from 'react-router-dom'

const Report: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center flex-col h-screen pt-10 pb-10 pr-8 pl-8">
      <div className="text-[#191919] text-[32px] font-medium leading-[125%] tracking-[-0.64px] font-[GmarketSansWeight]">
        <span className="text-[#8BBEB9]">균형 잡힌 식단</span>
        <span>으로</span>
        <p>목표 체중 달성하기</p>
      </div>
      <WeightProgressChart />
      <div className="self-start text-black text-2xl font-medium leading-[121%] font-[GmarketSansWeight]">
        하루 영양 섭취 가이드
      </div>
      <NutrientsBox />
      <div className="w-[327px]">
        <button
          className="w-[327px] h-[55px] font-[pretendard] bg-[#D1D1D1] 
      shadow-whiteBox rounded-base font-semibold text-[14px] text-[#191919] outline-none mb-9"
          onClick={() => navigate('/suggestion')}
        >
          다음
        </button>
      </div>
    </div>
  )
}

export default Report
