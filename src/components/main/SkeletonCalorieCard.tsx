const SkeletonCalorieCard = () => {
  return (
    <div
      className="w-[100%] h-[200px] rounded-[20px] p-4 shadow-md mx-auto mt-[11px] bg-gray-200 animate-pulse"
    >
      <div className="flex justify-between items-center mb-3 w-[330px]">
        {/* 제목 스켈레톤 */}
        <div className="h-6 bg-gray-300 rounded w-[100px]"></div>

        {/* 색상 버튼 스켈레톤 */}
        <div className="flex space-x-2 mb-5">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="w-3 h-3 bg-gray-300 rounded-full"></div>
          ))}
        </div>
      </div>

      {/* 칼로리 진행바 스켈레톤 */}
      <div className="w-full h-4 bg-gray-300 rounded mb-2 mt-3"></div>

      {/* 탄, 단, 지 스켈레톤 */}
      <div className="w-full mt-10">
        <div className="flex justify-between mt-2">
          {/* 탄수화물 */}
          <div className="flex flex-col items-start w-[30%]">
            <div className="w-[90px] h-6 bg-gray-300 rounded mb-1"></div>
            <div className="w-[90px] h-4 bg-gray-300 rounded"></div>
          </div>
          {/* 단백질 */}
          <div className="flex flex-col items-start w-[30%]">
            <div className="w-[90px] h-6 bg-gray-300 rounded mb-1"></div>
            <div className="w-[90px] h-4 bg-gray-300 rounded"></div>
          </div>
          {/* 지방 */}
          <div className="flex flex-col items-start w-[30%]">
            <div className="w-[90px] h-6 bg-gray-300 rounded mb-1"></div>
            <div className="w-[90px] h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCalorieCard;
