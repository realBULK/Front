import React from "react";

interface ProgressBarProps {
  progress: number; // 진행률 (0-100)
  color: string; // 진행 바 색상
}

const MainProgressBar: React.FC<ProgressBarProps> = ({ progress, color }) => {
  return (
    <div className="relative w-full h-4 bg-[#DFDFDF] rounded-full">
      <div
        className="absolute h-4 rounded-full"
        style={{
          width: `${progress}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default MainProgressBar;
