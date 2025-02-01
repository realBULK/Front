import { useState } from 'react';
import Box from '../components/WhiteBox';
import mask from '../assets/Maskgroup.svg';
import DefaultHeart from '../assets/DefaultHeart.svg';
import HoveringHeart from '../assets/HoveringHeart.svg';
import PressingHeart from '../assets/PressingHeart.svg';
import level from '../assets/level.svg';

// 가상의 사용자 데이터 (회원가입 시 가져온 데이터)
const mockUsers = [
  { id: 1, nickname: 'user1' },
  { id: 2, nickname: 'user2' },
  { id: 3, nickname: 'user3' },
  { id: 4, nickname: 'user4' },
  { id: 5, nickname: 'user5' },
  { id: 6, nickname: 'user6' },
  { id: 7, nickname: 'user7' },
  { id: 8, nickname: 'user8' },
  { id: 9, nickname: 'user9' },
  { id: 10, nickname: 'user10' },
];

const Member = () => {
  const length = mockUsers.length; // 팀원 수
  const [likes, setLikes] = useState<number[]>(Array(length).fill(0));
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHeartClick = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) => (i === index ? (like > 0 ? 0 : 1) : like)) // 눌린 상태 토글
    );
  };

  return (
    <div className="bg-[#F5F5F5] flex flex-col items-center pt-[2px]">
      <div className="w-[327px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">
          오늘의 팀원
        </h2>
      </div>
      <Box
        className="w-[327px] h-[226px] grid grid-cols-5 gap-x-2 bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4"
      >
        {/* 팀원 리스트 */}
        {mockUsers.map((user, index) => (
          <div
            key={user.id}
            className="flex flex-col items-center w-[60px] h-[100px]"
          >
            <div className="relative w-[42px] h-[42px]">
              {/* Level 테두리 */}
              <img
                src={level}
                alt="Level"
                className="absolute top-0 left-0 w-full h-full"
              />
              {/* 프로필 이미지 */}
              <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={mask}
                  alt="Group Mask"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* 사용자 닉네임 */}
            <p className="text-[9px] font-[pretendard] text-[#000000] mt-1">
              {user.nickname}
            </p>
            <div
              className="flex items-center mt-1"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {/* 하트 버튼 */}
              <button
                type="button"
                className="w-[15px] h-[15px] mr-1"
                onClick={() => handleHeartClick(index)}
              >
                <img
                  src={
                    likes[index] > 0
                      ? PressingHeart
                      : hoverIndex === index
                      ? HoveringHeart
                      : DefaultHeart
                  }
                  alt="Heart"
                  className="w-full h-full"
                />
              </button>
              {/* 좋아요 수 */}
              <p className="text-[10px] font-[pretendard] text-[#000000]">
                {likes[index]}
              </p>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Member;
