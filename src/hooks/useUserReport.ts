import { useQuery } from '@tanstack/react-query'

const fetchUserReport = async () => {
  const response = await fetch('/api/user/question/report')
  if (!response.ok) {
    throw new Error('데이터를 불러오는 데 실패했습니다.')
  }
  return response.json()
}

export const useUserReport = () => {
  return useQuery({
    queryKey: ['userReport'],
    queryFn: fetchUserReport,
  })
}
