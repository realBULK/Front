import { useMutation } from '@tanstack/react-query'
import api from '@/apis/axiosInstance'

type UserDataPayload = {
  nickname: string | null
  height: number | null
  weight: number | null
  goalWeight: number | null
  activityLevel: string | null
  mealNumber: string | null
  cookTime: string | null
  deliveryNum: string | null
  mealTime: string | null
  eatingOut: string | null
  favoriteFood: string | null
}

type UserDataResponse = {
  id: number
  nickname: string
  height: number
  weight: number
  goalWeight: number
  activityLevel: string
  mealNumber: string
  cookTime: string
  deliveryNum: string
  mealTime: string
  eatingOut: string
  favoriteFood: string
  updatedAt: string
}

type ApiResponse = {
  isSuccess: boolean
  code: string
  message: string
  status: string
  data: UserDataResponse | null
}

export const useUserData = () => {
  return useMutation<ApiResponse, Error, UserDataPayload>({
    mutationFn: async (userData: UserDataPayload) => {
      const response = await api.patch<ApiResponse>(`/api/user/question?id=2`, userData, {
        headers: { 'Content-Type': 'application/json' },
      })
      return response.data
    },
    onError: (error) => {
      console.error('API 요청 중 에러 발생:', error)
    },
    onSuccess: (data) => {
      console.log('데이터가 성공적으로 업데이트되었습니다:', data)
    },
  })
}
