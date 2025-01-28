const SkeletonStart = () => {
  return (
    <div className="flex items-center justify-center h-screen animate-pulse">
      <div className="flex flex-col items-center w-full">
        <div className="w-[334.21px] h-[178.66px] bg-gray-300 rounded-md mb-[75px] mt-[15%]"></div>

        <div className="w-[327px] h-[57px] bg-gray-300 rounded-[200px] mb-[20px]"></div>

        <div className="flex items-center w-[327px] mb-[35px]">
          <hr className="flex-1 border-gray-300" />
          <span className="mx-4 h-4 w-10 bg-gray-300 rounded"></span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex flex-col gap-2 w-full max-w-xs">
          <div className="w-[327px] h-[57px] bg-gray-300 rounded-[200px]"></div>
          <div className="w-[327px] h-[57px] bg-gray-300 rounded-[200px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonStart;
