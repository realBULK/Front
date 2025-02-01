import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type CheckNicknameResponse = {
  isSuccess: boolean;
  code: string;
  message: string;
  status: string;
  data: {
    duplicated: boolean;
  };
};

export const useCheckNickname = (nickname: string) => {
  return useQuery<CheckNicknameResponse>({
    queryKey: ["checkNickname", nickname || ""], // 안전하게 queryKey 설정
    queryFn: async () => {
      if (!nickname.trim()) {
        // 닉네임이 없으면 빈 데이터 반환
        return {
          isSuccess: false,
          code: "400",
          message: "닉네임이 입력되지 않았습니다.",
          status: "BAD_REQUEST",
          data: { duplicated: false },
        };
      }
      const response = await axios.get(`/api/user/question/isDuplicated/${nickname}`);
      return response.data;
    },
    enabled: nickname.trim().length > 0, // 닉네임이 입력된 경우에만 실행
    retry: false, // 실패 시 재시도 방지
  });
};
