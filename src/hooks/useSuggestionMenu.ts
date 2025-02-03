import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuggestionMenu = async () => {
  try {
    const response = await axios.get('/api/menu')
    return response.data
  } catch (error) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
}

export const useSuggestionMenu = () => {
  return useQuery({
    queryKey: ['suggestionMenu'],
    queryFn: fetchSuggestionMenu,
  })
}
