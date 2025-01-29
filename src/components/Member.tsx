import Box from '../components/WhiteBox';
import mask from '../assets/Maskgroup.svg';
import DefaultHeart from '../assets/DefaultHeart.svg';
import HoveringHeart from '../assets/HoveringHeart.svg';
import PressingHeart from '../assets/PressingHeart.svg';
import { useState } from 'react';

const Member = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [pressedIndex, setPressedIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#F5F5F5] min-h-screen flex flex-col items-center pt-[452px]">
      <h2 className="text-lg font-semibold mb-4">오늘의 팀원</h2>
      <Box
        className="w-[327px] h-auto grid grid-cols-5 gap-x-2 gap-y-4 bg-white/80 rounded-base border border-[#EDEDED] shadow-whiteBoxDeepShadow p-4"
      >
        {/* 팀원 리스트 */}
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[60px] h-[100px] justify-between"
          >
            <div className="w-[42px] h-[42px] rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
              {/* 이미지 자리 */}
              <img
                src={mask}
                alt="Group Mask"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-[7px] mt-1">닉네임</p>
            <div
              className="w-[15px] h-[15px] mt-1"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onMouseDown={() => setPressedIndex(index)}
              onMouseUp={() => setPressedIndex(null)}
            >
              <img
                src={
                  pressedIndex === index
                    ? PressingHeart
                    : hoverIndex === index
                    ? HoveringHeart
                    : DefaultHeart
                }
                alt="Heart"
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </Box>
    </div>
  );
};

export default Member;
