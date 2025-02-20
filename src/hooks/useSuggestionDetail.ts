import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

const fetchSuggestionDetail = async (mealPlanId: number, type: string) => {
  try {
    const response = await api.get(`/api/menu/${mealPlanId}?type=${type}&pageSize=2`)
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useSuggestionDetail = (mealPlanId: number, type: string) => {
  return useQuery({
    queryKey: ['suggestionDetail', mealPlanId, type], // mealPlanId를 key에 포함하면 캐싱에 도움됨
    queryFn: () => fetchSuggestionDetail(mealPlanId, type), // 함수 자체를 전달
    enabled: !!mealPlanId && !!type, // mealPlanId가 있을 때만 실행
  })
}
