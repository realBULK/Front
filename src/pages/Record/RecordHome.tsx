import { Link } from 'react-router'

const RecordHome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* 상단 텍스트 */}
      <div className="flex justify-start items-start w-[83%] leading-[48.4px]">
        <h1 className="text-[40px] font-[GmarketSansWeight] font-[800] mb-[59px] ms-[15px]">
          오늘도, <br />
          성공이에요!
        </h1>
      </div>

      {/* 버튼 그룹 */}
      <div className="flex flex-col gap-8 w-[83%]">
        {/* 첫 번째 버튼 */}
        <Link
          to="equal"
          className="flex items-center justify-center py-4 bg-white rounded-base shadow-base text-[16px] font-[600] h-[80px] border-[1px] border-solid border-[#EDEDED]"
        >
          식단 대로 먹었어요 📄
        </Link>
        {/* 두 번째 버튼 */}
        <Link
          to="unequal"
          className="flex items-center justify-center py-4 bg-white rounded-base shadow-base text-[16px] font-[600] h-[80px] border-[1px] border-solid border-[#EDEDED]"
        >
          식단과 다르게 먹었어요 😊
        </Link>
      </div>
    </div>
  )
}

export default RecordHome
