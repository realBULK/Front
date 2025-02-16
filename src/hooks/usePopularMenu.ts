import { useQuery } from '@tanstack/react-query'
import { api } from '@/apis/axiosInstance'

const fetchPopularMenu = async () => {
  try {
    const response = await api.get('/api/search/popularity')
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const usePopularMenu = () => {
  return useQuery({
    queryKey: ['popularMenu'],
    queryFn: fetchPopularMenu,
  })
}
