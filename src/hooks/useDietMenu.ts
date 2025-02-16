import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

// 특정 날짜에 해당하는 dailyMeals만 필터링
const fetchDietMenuDaily = async (date: string) => {
  try {
    const response = await api.get('/api/menu')
    const allData = response.data

    // 오늘 날짜에 해당하는 dailyMeals 찾기
    const dailyMeals = allData?.data?.dailyMeals || []
    const todayMeal = dailyMeals.find((meal: { date: string }) => meal.date === date)

    return (
      todayMeal || {
        dailyMealId: null,
        date,
        meals: [],
        dailyCalories: 0,
        dailyCarbos: 0,
        dailyProteins: 0,
        dailyFats: 0,
      }
    )
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useDietMenuDaily = (date: string) => {
  return useQuery({
    queryKey: ['userDietMenuDaily', date],
    queryFn: () => fetchDietMenuDaily(date), // date를 인자로 전달하여 호출
  })
}
