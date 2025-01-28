import React, { useState } from "react";
import ProgressBar from "../MainProgressBar";
import SkeletonCalorieCard from "./SkeletonCalorieCard";

interface Color {
  bar: string;
  background: string;
}

interface CalorieCardProps {
  selectedColor: Color;
  colors: Record<string, Color>;
  onColorChange: (color: Color) => void;
}

const CalorieCard: React.FC<CalorieCardProps> = ({ selectedColor, colors, onColorChange }) => {
  
  const [isLoading] = useState(false);

  if (isLoading) {
    return <SkeletonCalorieCard/>;
  }
  
  return (
    <div
      className="w-[100%] rounded-[20px] p-4 shadow-md mx-auto mt-[11px]"
      style={{ backgroundColor: selectedColor.background }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[24px] font-[Pretendard] font-semibold text-black">칼로리</h2>

        {/* 색상 버튼 */}
        <div className="flex space-x-2 mb-5">
          {Object.entries(colors).map(([key, color]) => (
            <button
              key={key}
              onClick={() => onColorChange(color)}
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: color.bar }}
            ></button>
          ))}
        </div>
      </div>

      {/* 칼로리 진행바 */}
      <ProgressBar progress={89} color={selectedColor.bar} />
      <div className="font-[Pretendard] flex justify-between mt-1 text-sm text-#000">
        <span></span>
        <span>
          <span>1,345</span>
          <span className="text-[#8D8D8D]">/1,500kcal</span>
        </span>
      </div>

      {/* 탄, 단, 지 */}
      <div className="w-full mt-2">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">탄수화물</span>
            <ProgressBar progress={100} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">350g</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">단백질</span>
            <ProgressBar progress={50} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">200g</span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">지방</span>
            <ProgressBar progress={30} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-[#000000]-600 ml-[61px]">100g</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCard;
