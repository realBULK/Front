
interface LevelProgressProps {
    progressColor: string; // 진행 바 색상
    progressPercentage: number; // 진행률 (0~100)
  }
  
  const LevelProgress: React.FC<LevelProgressProps> = ({ progressColor, progressPercentage }) => {
    const strokeDasharray = `${progressPercentage}, 100`; // 퍼센트 기반으로 채우기
  
    return (
      <svg className="absolute top-0 left-0 w-[90%] h-full" viewBox="0 0 36 36">
        {/* 회색 배경 원형 */}
        <path
          className="text-gray-200"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        ></path>
        
        {/* 진행률에 따라 색상이 채워지는 원형 */}
        <path
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          stroke={progressColor}
          strokeDasharray={strokeDasharray}
          strokeWidth="4"
        ></path>
      </svg>
    );
  };
  
  export default LevelProgress;