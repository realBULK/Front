import Box from '@/components/WhiteBox'
import back from '@/assets/back.svg'

const DietBoxSkeleton: React.FC = () => {
  return (
    <Box className="h-[100px] shadow-whiteBox gap-4 cursor-pointer text-[#191919] w-full p-4 animate-pulse">
      <div className="flex flex-col items-center justify-center relative">
        {/* 아이콘 자리 */}
        <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
        {/* 제목 */}
        <div className="mt-1 w-[50px] h-[14px] bg-gray-300 rounded"></div>
      </div>

      {/* 식사 정보 */}
      <div className="flex flex-col flex-1 text-left gap-1">
        {/* 식사 항목 */}
        <div className="w-[180px] h-[16px] bg-gray-300 rounded"></div>
        <div className="w-[120px] h-[14px] bg-gray-300 rounded"></div>
        <div className="w-[60px] h-[16px] bg-gray-300 rounded"></div>
      </div>

      {/* 뒤로가기 아이콘 자리 */}
      <img src={back} alt="back" className="opacity-30" />
    </Box>
  )
}

export default DietBoxSkeleton
