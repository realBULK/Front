import React from "react";
import ProgressBar from "../MainProgressBar";
import SkeletonCalorieCard from "./SkeletonCalorieCard";

interface Color {
  bar: string;
  background: string;
}

interface NutritionDTO {
  curCalories: number;
  curFats: number;
  curProteins: number;
  curCarbos: number;
  calories: number;
  fats: number;
  proteins: number;
  carbos: number;
}

interface CalorieCardProps {
  selectedColor: Color;
  colors: Record<string, Color>;
  onColorChange: (color: Color) => void;
  apiData: NutritionDTO | null; 
  isLoading: boolean; 
}

const CalorieCard: React.FC<CalorieCardProps> = ({
  selectedColor,
  colors,
  onColorChange,
  apiData,
  isLoading,
}) => {
  if (isLoading || !apiData) {
    return <SkeletonCalorieCard />;
  }

  // API 데이터가 없을 경우 기본값 처리
  const calorieProgress = ((apiData.curCalories ?? 0) / (apiData.calories ?? 1)) * 100;
  const carbProgress = ((apiData.curCarbos ?? 0) / (apiData.carbos ?? 1)) * 100;
  const proteinProgress = ((apiData.curProteins ?? 0) / (apiData.proteins ?? 1)) * 100;
  const fatProgress = ((apiData.curFats ?? 0) / (apiData.fats ?? 1)) * 100;

  return (
    <div
      className="w-[100%] h-[100%] rounded-[20px] p-4 shadow-md mx-auto mt-[11px]"
      style={{ backgroundColor: selectedColor.background }}
    >
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-[24px] font-[Pretendard] font-semibold text-black">칼로리</h2>

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
      <ProgressBar progress={calorieProgress} color={selectedColor.bar} />
      <div className="font-[Pretendard] flex justify-between mt-1 text-sm text-black">
        <span></span>
        <span>
          <span>{apiData.curCalories ?? 0}</span>
          <span className="text-[#8D8D8D]">/{apiData.calories ?? 0} kcal</span>
        </span>
      </div>

      {/* 탄수화물, 단백질, 지방 */}
      <div className="w-full mt-2">
        <div className="flex justify-between">
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">탄수화물</span>
            <ProgressBar progress={carbProgress} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-black ml-[61px]">
              {apiData.curCarbos ?? 0}g
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">단백질</span>
            <ProgressBar progress={proteinProgress} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-black ml-[61px]">
              {apiData.curProteins ?? 0}g
            </span>
          </div>
          <div className="flex flex-col items-start">
            <span className="font-[Pretendard] w-[90px] text-lg font-semibold mb-1">지방</span>
            <ProgressBar progress={fatProgress} color={selectedColor.bar} />
            <span className="font-[Pretendard] mt-1 text-sm text-black ml-[61px]">
              {apiData.curFats ?? 0}g
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalorieCard;

