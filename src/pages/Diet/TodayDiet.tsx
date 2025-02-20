import NavBar from '@/components/NavBar'
import SuggestionDaysComponent from '@/components/SuggestionDaysComponent'
import { useSuggestionMenu } from '@/hooks/useSuggestionMenu'
import { useNavigate, useLocation } from 'react-router'

const TodayDiet = () => {
  const navigator = useNavigate()
  const location = useLocation()

  const mealPlanId = location.state?.mealPlanId
  const { data, isLoading, error } = useSuggestionMenu(mealPlanId)

  if (isLoading) return <p>로딩 중...</p>
  if (error) return <p>에러 발생: {error.message}</p>

  const mealData = data?.data.dailyMeals

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pb-[80px] pt-11 pr-[33px] pl-[33px]">
        <div className="flex self-start justify-center gap-14 text-black text-[40px] not-italic font-medium leading-[121%] font-[GmarketSansWeight] mb-8">
          오늘 내 식단
          <img src="/src/assets/X.svg" alt="뒤로가기" onClick={() => navigator('/diet')} />
        </div>
        <div className="mb-4">
          <SuggestionDaysComponent data={mealData} />
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default TodayDiet
