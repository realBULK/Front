import { useState, useEffect } from 'react';
import axios from 'axios';

interface Emoji {
  emojiType: string;
  count: number;
}

interface Member {
  userId: number;
  nickname: string;
  characterId: number;
  emojis: Emoji[];
}

const useFetchGroupMembers = (groupId: number) => {
    const [members, setMembers] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchMembers = async () => {
        console.log(`🔄 그룹 ${groupId}의 팀원 데이터를 불러오는 중...`);
        try {
          const response = await axios.get(`/api/groups/${groupId}/today`);
          console.log("✅ API 응답 데이터:", response.data);
  
          if (response.data.isSuccess) {
            const teamMembers = response.data.result?.todayMembers || []; 
            setMembers(teamMembers);
          } else {
            setError(response.data.message || '데이터를 가져오는 데 실패했습니다.');
            console.error("❌ API 에러 메시지:", response.data.message);
          }
        } catch (err) {
          setError('서버 요청 중 오류가 발생했습니다.');
          console.error("❌ 서버 요청 중 오류 발생:", err);
        } finally {
          setLoading(false);
          console.log("🔄 데이터 요청 완료");
        }
      };
  
      fetchMembers();
    }, [groupId]);
  
    return { members, loading, error };
  };
  

export default useFetchGroupMembers;
