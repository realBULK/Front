import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchPopularMenu = async () => {
  try {
    const response = await axios.get('/api/search/popularity')
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
