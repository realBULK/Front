import { useState, useEffect } from "react";
import api from "@/apis/axiosInstance";

interface HeartData {
  likes: { [key: number]: number };
  emojiRecordIds: { [key: number]: number | null };
  handleHeartClick: (userId: number) => Promise<void>;
}

const useHeart = (members: any[], myUserId: number): HeartData => {
  const [likes, setLikes] = useState<{ [key: number]: number }>({});
  const [emojiRecordIds, setEmojiRecordIds] = useState<{ [key: number]: number | null }>({});

  // ✅ 하트 개수 가져오기
  const fetchHeartCount = async (userId: number) => {
    try {
      const response = await api.get(`/api/groups/emojis/count/${userId}`);
      if (response.data.isSuccess) {
        return response.data.data;
      }
    } catch (error) {
      console.error(`❌ 하트 개수 조회 실패 (userId: ${userId})`, error);
    }
    return 0;
  };

  useEffect(() => {
    if (members.length > 0) {
      const initialLikes: { [key: number]: number } = {};
      const initialEmojiIds: { [key: number]: number | null } = {};

      Promise.all(
        members.map(async (user) => {
          const count = await fetchHeartCount(user.userId);
          initialLikes[user.userId] = count;
          initialEmojiIds[user.userId] = null;
        })
      ).then(() => {
        setLikes(initialLikes);
        setEmojiRecordIds(initialEmojiIds);
      });
    }
  }, [members]);

  // ✅ 하트 추가/삭제
  const handleHeartClick = async (userId: number) => {
    if (userId === myUserId) {
      console.log("❌ 자기 자신에게 하트를 줄 수 없습니다.");
      alert("❌ 자기 자신에게 하트를 줄 수 없습니다.");
      return;
    }

    const isLiked = likes[userId] > 0;
    const emojiId = emojiRecordIds[userId];

    try {
      if (isLiked && emojiId) {
        await api.delete(`/api/groups/emojis/${emojiId}`);
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
            [userId]: response.data.data.emojiRecordId,
          }));
        }
      }
    } catch (error) {
      console.error("❌ 이모지 전송 실패:", error);
    }
  };

  return { likes, emojiRecordIds, handleHeartClick };
};

export default useHeart;
