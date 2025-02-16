import { useQuery } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

const fetchUserReport = async () => {
  try {
    const response = await api.get('/api/user/question/report')
    return response.data // axios는 자동으로 JSON 변환을 수행
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useUserReport = () => {
  return useQuery({
    queryKey: ['userReport'],
    queryFn: fetchUserReport,
  })
}
