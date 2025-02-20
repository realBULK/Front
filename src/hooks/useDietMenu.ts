import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

// 특정 날짜에 해당하는 dailyMeals만 필터링
const fetchDietMenuDaily = async (dailyMeal: string) => {
  try {
    const response = await api.get(`/api/dailyMeal/${dailyMeal}`)
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useDietMenuDaily = (dailyMeal: string) => {
  return useQuery({
    queryKey: ['userDietMenuDaily', dailyMeal],
    queryFn: () => fetchDietMenuDaily(dailyMeal), // date를 인자로 전달하여 호출
  })
}
