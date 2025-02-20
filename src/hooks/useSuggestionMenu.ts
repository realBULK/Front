import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

const fetchSuggestionMenu = async (mealPlanId: number) => {
  try {
    const response = await api.get(`/api/mealPlan/mealPlanId?mealPlanId=${mealPlanId}`)
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useSuggestionMenu = (mealPlanId: number) => {
  return useQuery({
    queryKey: ['suggestionMenu', mealPlanId], // mealPlanId를 key에 포함하면 캐싱에 도움됨
    queryFn: () => fetchSuggestionMenu(mealPlanId), // 함수 자체를 전달
    enabled: !!mealPlanId, // mealPlanId가 있을 때만 실행
  })
}
