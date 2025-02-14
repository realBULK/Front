import { useState, useEffect } from 'react';
import Box from '../components/WhiteBox';
import mask from '../assets/Maskgroup.svg';
import DefaultHeart from '../assets/DefaultHeart.svg';
import HoveringHeart from '../assets/HoveringHeart.svg';
import PressingHeart from '../assets/PressingHeart.svg';
import level from '../assets/level.svg';
import levelbg from '../assets/level_bg.svg';
import useFetchGroupMembers from '../hooks/useFetchGroupMembers';

const groupId = 1;

const Member = () => {
  const { members, loading, error } = useFetchGroupMembers(groupId);
  const [likes, setLikes] = useState<number[]>([]);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  /*const handleHeartClick = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? (like > 0 ? 0 : 1) : like)) 
    );
  };*/

  useEffect(() => {
    if (members.length > 0) {
      setLikes(Array(members.length).fill(0)); // 데이터가 로드되면 likes 배열 초기화
      console.log("👥 팀원 데이터:", members); // 팀원 데이터 로그
    }
  }, [members]);

  if (loading) {
    console.log("⏳ 팀원 데이터를 불러오는 중...");
    return <div className="text-center text-gray-500">⏳ 데이터 로딩 중...</div>;
  }

  if (error) {
    console.error("❌ API 오류 발생:", error);
    return <div className="text-center text-red-500">⚠️ {error}</div>;
  }

  return (
    <div
      className="
        bg-[#F5F5F5] flex flex-col items-center pt-[2%] 
        [@media(max-width:400px)]:overflow-y-auto
      "
    >
      <div className="w-[100%] max-w-[470px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">
          오늘의 팀원
        </h2>
      </div>
      <Box
        className="
          w-[100%] max-w-[460px] 
          bg-white/80 rounded-base border border-[#EDEDED]
          shadow-whiteBoxDeepShadow p-4
          grid
          grid-cols-5 gap-x-2
          h-[90%] 
         h-auto
          [@media(max-width:400px)]:grid-cols-3 
          [@media(max-width:400px)]:h-auto
        "
      >
        {/* 팀원 리스트 */}
        {members.map((user, index) => (
          <div key={user.userId} className="flex flex-col items-center w-[60px] h-[100px]">
            <div className="relative w-[42px] h-[42px]">
              <img src={levelbg} alt="레벨 배경" className="absolute top-0 left-0 w-full h-full" />
              <img src={level} alt="레벨" className="absolute top-0 left-0 w-full h-full" />
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img src={mask} alt="프로필" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* 사용자 닉네임 */}
            <p className="text-[9px] font-[pretendard] text-[#000000] mt-1">{user.nickname}</p>

            {/* 좋아요 버튼 */}
            <div
              className="flex items-center mt-1"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <button
                type="button"
                className="w-[15px] h-[15px] mr-1"
                //onClick={() => handleHeartClick(index)}
                onClick={() => {
                  setLikes((prevLikes) =>
                    prevLikes.map((like, i) => (i === index ? (like > 0 ? 0 : 1) : like))
                  );
                  console.log(`❤️ ${user.nickname}의 좋아요 상태 변경: ${likes[index] > 0 ? 'OFF' : 'ON'}`);
                }}
              >
                <img
                  src={likes[index] > 0 ? PressingHeart : hoverIndex === index ? HoveringHeart : DefaultHeart}
                  alt="하트"
                  className="w-full h-full"
                />
              </button>
              <p className="text-[10px] font-[pretendard] text-[#000000]">{likes[index]}</p>
            </div>

            {/* 이모지 표시 <div className="flex flex-wrap gap-1 mt-1">
              {user.emojis.map((emoji, i) => (
                <div key={i} className="flex items-center">
                  <span className="text-[12px]">{emoji.emojiType}</span>
                  <span className="text-[10px] ml-1">x{emoji.count}</span>
                </div>
              ))}
            </div>*/}
            
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Member;
