import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '@/apis/axiosInstance';

export interface UserData {
  nickname: string;
  height: number;
  weight: number;
  goalWeight: number;
  activityLevel: string;
  mealNumber: string;
  cookTime: string;
  deliveryNum: string;
  mealTime: string;
  eatingOut: string;
  favoriteFood: string;
}

// ✅ 유저 정보를 가져오는 API (`useQuery`)
const fetchUserData = async (): Promise<UserData> => {
  const response = await api.get('/api/user/question');
  if (response.data.isSuccess) {
    return response.data.data as UserData;
  } else {
    throw new Error(response.data.message || "데이터 조회 실패");
  }
};

// ✅ 유저 정보를 업데이트하는 API (`useMutation`)
const updateUserData = async (data: UserData): Promise<void> => {
  const response = await api.patch('/api/user/question', data);
  if (!response.data.isSuccess) {
    throw new Error(response.data.message || "데이터 업데이트 실패");
  }
};

// ✅ `useQuery` + `useMutation` 함께 사용
export const useUserData = () => {
  const queryClient = useQueryClient();

  const query = useQuery<UserData, Error>({
    queryKey: ['userData'],
    queryFn: fetchUserData,
    staleTime: 5 * 60 * 1000, // 5분 동안 캐싱 유지
  });

  const mutation = useMutation<void, Error, UserData>({
    mutationFn: updateUserData,
    onSuccess: () => {
      console.log("✅ 데이터 업데이트 성공");
      queryClient.invalidateQueries({ queryKey: ['userData'] });
    },
    onError: (error) => {
      console.error("❌ 데이터 업데이트 실패:", error);
    },
  });

  return { query, mutation };
};
