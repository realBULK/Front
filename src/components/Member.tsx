import Box from '../components/WhiteBox';
import mask from '../assets/Maskgroup.svg';
import DefaultHeart from '../assets/DefaultHeart.svg';
import HoveringHeart from '../assets/HoveringHeart.svg';
import PressingHeart from '../assets/PressingHeart.svg';
import { useState } from 'react';

const Member = () => {
  // 각 하트의 상태와 클릭 수를 관리
  const [likes, setLikes] = useState<number[]>(Array(8).fill(0)); // 초기 0으로 설정
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHeartClick = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index ? (like > 0 ? 0 : 1) : like // 눌린 상태 토글 (0 또는 1)
      )
    );
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center pt-[452px] mb-12">
      <div className="w-[327px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">오늘의 팀원</h2>
      </div>
      <Box
        className="w-[327px] h-auto grid grid-cols-5 gap-x-2 bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4"
      >
        {/* 팀원 리스트 */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[60px] h-[100px]"
          >
            <div className="w-[42px] h-[42px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* 이미지 자리 */}
              <img
                src={mask}
                alt="Group Mask"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[7px] font-[pretendard] text-[#000000] mt-1">닉네임</p>
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
              <p className="text-[10px] font-[pretendard] text-[#000000]">{likes[index]}</p>
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Member;
