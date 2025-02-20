import { useState, useEffect } from "react";
import Box from "../../components/WhiteBox";
import mask from "../../assets/Maskgroup.svg";
import DefaultHeart from "../../assets/DefaultHeart.svg";
import HoveringHeart from "../../assets/HoveringHeart.svg";
import PressingHeart from "../../assets/PressingHeart.svg";
import level from "../../assets/level.svg";
import levelbg from "../../assets/level_bg.svg";
import useFetchGroupMembers from "../../hooks/useFetchGroupMembers";
import api from "@/apis/axiosInstance";

const Member = () => {
  const { members, loading, error } = useFetchGroupMembers();
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [emojiRecordIds, setEmojiRecordIds] = useState<{ [key: number]: number | null }>({});
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // ✅ 각 멤버별 받은 하트 개수 가져오기
  const fetchHeartCount = async (userId: number) => {
    try {
      const response = await api.get(`/api/groups/emojis/count/${userId}`);
      if (response.data.isSuccess) {
        return response.data.data; // 받은 하트 개수
      }
    } catch (error) {
      console.error(`❌ 하트 개수 조회 실패 (userId: ${userId})`, error);
    }
    return 0; // 오류 발생 시 기본값 0
  };

  useEffect(() => {
    if (members.length > 0) {
      const initialLikes: { [key: number]: number } = {};
      const initialEmojiIds: { [key: number]: number | null } = {};

      // ✅ 모든 멤버의 하트 개수 조회
      Promise.all(
        members.map(async (user) => {
          const count = await fetchHeartCount(user.userId);
          initialLikes[user.userId] = count;
          initialEmojiIds[user.userId] = null; // 초기값 설정
        })
      ).then(() => {
        setLikes(initialLikes);
        setEmojiRecordIds(initialEmojiIds);
        console.log("👥 팀원 데이터:", members);
      });
    }
  }, [members]);

  const myUserId = Number(localStorage.getItem("userId"));

  const handleHeartClick = async (userId: number) => {

    if (userId === myUserId) {
      console.log("❌ 자기 자신에게 하트를 줄 수 없습니다.");
      alert('❌ 자기 자신에게 하트를 줄 수 없습니다.')
      return; // 함수 실행을 막음
    }


    const isLiked = likes[userId] > 0;
    const emojiId = emojiRecordIds[userId];

    try {
      if (isLiked && emojiId) {
        // ✅ 하트 삭제 (DELETE 요청)
        console.log(`❌ ${userId}의 하트 삭제 (ID: ${emojiId})`);
        await api.delete(`/api/groups/emojis/${emojiId}`);

        // ✅ 하트 개수 다시 가져오기
        const updatedCount = await fetchHeartCount(userId);
        setLikes((prevLikes) => ({
          ...prevLikes,
          [userId]: updatedCount,
        }));
        setEmojiRecordIds((prevIds) => ({
          ...prevIds,
          [userId]: null,
        }));
      } else {
        // ✅ 하트 추가 (POST 요청)
        console.log(`❤️ ${userId}에게 하트 추가`);
        const response = await api.post("/api/groups/emojis", {
          receiverUserId: userId,
          emojiType: "heart",
        });

        if (response.data.isSuccess) {
          const updatedCount = await fetchHeartCount(userId);
          setLikes((prevLikes) => ({
            ...prevLikes,
            [userId]: updatedCount,
          }));
          setEmojiRecordIds((prevIds) => ({
            ...prevIds,
            [userId]: response.data.data.emojiRecordId, // 저장된 emojiRecordId 사용
          }));
        }
      }
    } catch (error) {
      console.error("❌ 이모지 전송 실패:", error);
    }
  };

  if (loading) {
    console.log("⏳ 팀원 데이터를 불러오는 중...");
    return <div className="text-center text-gray-500">⏳ 데이터 로딩 중...</div>;
  }

  if (error) {
    console.error("❌ API 오류 발생:", error);
    return <div className="text-center text-red-500">⚠️ {error}</div>;
  }

  return (
    <div className="bg-[#F5F5F5] flex flex-col items-center pt-[3%] [@media(max-width:400px)]:overflow-y-auto">
      <div className="w-[100%] max-w-[470px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">
          오늘의 팀원
        </h2>
      </div>
      <Box className="w-[100%] max-w-[460px] bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4 grid grid-cols-5 gap-x-2 h-[90%] h-auto [@media(max-width:400px)]:grid-cols-3 [@media(max-width:400px)]:h-auto">
        {members.map((user) => (
          <div key={user.userId} className="flex flex-col items-center w-[60px] h-[100px]">
            <div className="relative w-[42px] h-[42px]">
              <img src={levelbg} alt="레벨 배경" className="absolute top-0 left-0 w-full h-full" />
              <img src={level} alt="레벨" className="absolute top-0 left-0 w-full h-full" />
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={mask} alt="프로필" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-[9px] font-[pretendard] text-[#000000] mt-1">{user.nickname || "알 수 없음"}</p>

            <div
              className="flex items-center mt-1"
              onMouseEnter={() => setHoverIndex(user.userId)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <button
  type="button"
  className={`w-[15px] h-[15px] mr-1 ${
    user.userId === myUserId ? "cursor-not-allowed opacity-50" : ""
  }`}
  onClick={() => handleHeartClick(user.userId)}
  disabled={user.userId === myUserId}
>

                <img
                  src={
                    likes[user.userId] > 0
                      ? PressingHeart
                      : hoverIndex === user.userId
                      ? HoveringHeart
                      : DefaultHeart
                  }
                  alt="하트"
                  className="w-full h-full"
                />
              </button>
              <p className="text-[10px] font-[pretendard] text-[#000000]">{likes[user.userId]}</p>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Member;
