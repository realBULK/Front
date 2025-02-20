import { useState, useEffect } from 'react';
import api from '@/apis/axiosInstance';
import { useNavigate } from "react-router-dom";

interface Emoji {
  emojiType: string;
  count: number;
}

interface Member {
  userId: number;
  nickname: string | null;
  characterId: number;
  emojis: Emoji[];
}

const useFetchGroupMembers = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      console.log(`🔄 오늘의 팀원 데이터를 불러오는 중...`);
      setLoading(true);

      try {
        const response = await api.get('/api/groups/today');


        if (response.data && response.data.isSuccess) {
          console.log("✅ API 응답 데이터:", response.data);
          const formattedMembers = response.data.data.map((member: Member) => {
            const storedNickname = localStorage.getItem("nickname") || "알 수 없음"; 
            return {
              ...member,
              nickname: member.nickname || storedNickname, // 닉네임이 없으면 로컬 스토리지 값 사용
            };
          });
          setMembers(formattedMembers);
        } else {
          setError(response.data?.message || '데이터를 가져오는 데 실패했습니다.');
          console.error("❌ API 에러 메시지:", response.data?.message);
        }
      } catch (err: unknown) {
        console.error("❌ 서버 요청 중 오류 발생:", err);
      
        if (err instanceof Error) {
          console.error("📌 오류 메시지:", err.message);
        }
      
        if (typeof err === "object" && err !== null && "response" in err) {
          const errorResponse = err as { response: { status: number; data?: { message?: string } } };
          setError(`서버 오류(${errorResponse.response.status}): ${errorResponse.response.data?.message || '알 수 없는 오류'}`);
      
          if (errorResponse.response.status === 401 || errorResponse.response.status === 403) {
            console.warn("🔑 인증 오류 발생 - 로그인 필요");
            localStorage.removeItem('access_token');
            navigate('/login');
          }
        } else {
          setError('서버와 연결할 수 없습니다. 네트워크 상태를 확인하세요.');
        }
      
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { members, loading, error };
};

export default useFetchGroupMembers;
