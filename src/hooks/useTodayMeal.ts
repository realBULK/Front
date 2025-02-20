import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

const fetchTodayMeal = async (mealId: number) => {
  try {
    const response = await api.get(`/api/dailyMeal/${mealId}`)
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useTodayMeal = (mealId: number) => {
  return useQuery({
    queryKey: ['todayMeal', mealId], // mealPlanId를 key에 포함하면 캐싱에 도움됨
    queryFn: () => fetchTodayMeal(mealId), // 함수 자체를 전달
    enabled: !!mealId, // mealPlanId가 있을 때만 실행
  })
}
