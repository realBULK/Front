import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

const fetchQuestionResponse = async () => {
  try {
    const response = await api.get('/api/mealPlan/user')
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useQuestionResponse = () => {
  return useQuery({
    queryKey: ['questionResponse'],
    queryFn: fetchQuestionResponse,
  })
}
