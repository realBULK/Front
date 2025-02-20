import React from 'react'
import SuggestionDaysComponent from '@/components/SuggestionDaysComponent'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSuggestionMenu } from '@/hooks/useSuggestionMenu'

const Suggestion: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const mealPlanId = location.state?.mealPlanId
  const { data, isLoading, error } = useSuggestionMenu(mealPlanId)

  if (isLoading) return <p>로딩 중...</p>
  if (error) return <p>에러 발생: {error.message}</p>

  const mealData = data?.data.dailyMeals

  return (
    <div className="pr-8 pl-8 pt-9 pb-9 h-screen pb-16 overflow-y-scroll overflow-x-hidden">
      <div className="w-[327px] max-w-md mx-auto mt-auto mb-10 gap-5 flex flex-col">
        <div className="flex w-[300px] h-[89px] flex-col text-black text-[40px] font-medium leading-[121%] font-[GmarketSansWeight]">
          일주일 식단이<br></br>만들어 졌어요!
        </div>
        <div>
          <SuggestionDaysComponent data={mealData} />
        </div>
      </div>
      <div className="w-[327px] max-w-md mx-auto mt-auto">
        <button
          className="w-[327px] h-[55px] font-[pretendard] bg-[#D1D1D1] 
      shadow-whiteBox rounded-base font-semibold text-[14px] text-[#191919] outline-none mb-9"
          onClick={() => navigate('/home')}
        >
          벌크 시작하기
        </button>
      </div>
    </div>
  )
}

export default Suggestion
