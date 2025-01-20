import React from "react";
import ProgressBar from "./ProgressBar";

interface NutritionBarProps {
  label: string;
  progress: string;
  amount: string; 
  color: string; 
}

const NutritionBar: React.FC<NutritionBarProps> = ({ label, progress, amount, color }) => (
  <div className="flex flex-col items-start">
    <span className="font-[Pretendard] text-lg font-semibold mb-1">{label}</span>
    <ProgressBar width={progress} color={color} />
    <span className="font-[Pretendard] mt-1 text-sm text-[#000000]">{amount}</span>
  </div>
);

export default NutritionBar;
