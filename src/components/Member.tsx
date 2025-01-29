import Box from '../components/WhiteBox';
import mask from '../assets/Maskgroup.svg';
import DefaultHeart from '../assets/DefaultHeart.svg';
import HoveringHeart from '../assets/HoveringHeart.svg';
import PressingHeart from '../assets/PressingHeart.svg';
import { useState } from 'react';

const Member = () => {
  const length = 10; // 팀원 수 나타내는 변수
  const [likes, setLikes] = useState<number[]>(Array(length).fill(0)); 
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHeartClick = (index: number) => {
    setLikes((prevLikes) =>
      prevLikes.map((like, i) =>
        i === index ? (like > 0 ? 0 : 1) : like // 눌린 상태 토글 
      )
    );
  };

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center pt-[50px] mb-[80px]">
      <div className="w-[327px]">
        <h2 className="text-[24px] font-bold text-[#000000] font-[pretendard] ml-2 text-left">오늘의 팀원</h2>
      </div>
      <Box
        className="w-[327px] h-[226px] grid grid-cols-5 gap-x-2 bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4"
      >
        {/* 팀원 리스트 */}
        {Array.from({ length }).map((_, index) => (
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
            <p className="text-[8px] font-[pretendard] text-[#000000] mt-1">abaegopa12</p>
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
