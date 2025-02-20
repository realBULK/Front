import { useState } from "react";
import Box from "../../components/WhiteBox";
import mask from "../../assets/Maskgroup.svg";
import DefaultHeart from "../../assets/DefaultHeart.svg";
import HoveringHeart from "../../assets/HoveringHeart.svg";
import PressingHeart from "../../assets/PressingHeart.svg";
import level from "../../assets/level.svg";
import levelbg from "../../assets/level_bg.svg";
import useFetchGroupMembers from "../../hooks/group/useFetchGroupMembers";
import useHeart from "../../hooks/group/useHeart";
import useUserInfo from "../../hooks/group/useUserInfo";

const Member = () => {
  const { members, loading, error } = useFetchGroupMembers();
  const { myUserId, myNickname } = useUserInfo(members);
  const { likes, handleHeartClick } = useHeart(members, myUserId);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  if (loading) {
    console.log("⏳ 팀원 데이터를 불러오는 중...");
    return <div className="text-center text-gray-500">⏳ 데이터 로딩 중...</div>;
  }

  if (error) {
    console.error("❌ API 오류 발생:", error);
    return <div className="text-center text-red-500">⚠️ {error}</div>;
  }

  return (
    <div className="bg-[#F5F5F5] flex flex-col items-center pt-[2%]">
      <div className="w-[100%] max-w-[470px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">
          오늘의 팀원
        </h2>
      </div>
      <Box className="w-[100%] max-w-[460px] bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4 grid grid-cols-5 gap-x-2">
        {members.map((user) => (
          <div key={user.userId} className="flex flex-col items-center w-[60px] h-[100px]">
            <div className="relative w-[42px] h-[42px]">
              <img src={levelbg} alt="레벨 배경" className="absolute top-0 left-0 w-full h-full" />
              <img src={level} alt="레벨" className="absolute top-0 left-0 w-full h-full" />
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={mask} alt="프로필" className="w-full h-full object-cover" />
              </div>
            </div>
            <p className="text-[9px] font-[pretendard] text-[#000000] mt-1">
              {user.userId === myUserId ? myNickname : user.nickname || "알 수 없음"}
            </p>

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
