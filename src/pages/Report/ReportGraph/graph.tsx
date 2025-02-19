import Box from '@/components/WhiteBox'
import starCurrent from '/src/assets/graph_star_current.svg'
import starGoal from '/src/assets/graph_star_goal.svg'

interface WeightProgressGraphProps {
  currentWeight: number | null
  goalWeight: number | null
}

const WeightProgressGraph: React.FC<WeightProgressGraphProps> = ({ currentWeight, goalWeight }) => {
  return (
    <Box className="relative h-[258px] flex flex-col justify-between items-center shadow-whiteBox">
      {/* 배경선 (미관용) */}
      <div className="absolute w-[290px] h-[218px]">
        {/* 수직선 */}
        <div className="absolute left-1/2 top-2 h-full w-[1px] bg-[#DFDFDFB2] shadow-graphLine"></div>
        {/* 수평선 */}
        <div className="absolute bottom-5 left-0 w-full h-[1px] bg-[#DFDFDFB2] shadow-graphLine"></div>
      </div>

      {/* 그래프 영역 */}
      <div className="relative flex justify-center items-center w-full h-[160px]">
        <svg width="240" height="220" viewBox="0 0 240 160" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* 그라데이션 정의 */}
          <defs>
            {/* 곡선 선을 위한 그라데이션 */}
            <linearGradient id="lineGradient" x1="130" y1="20" x2="130" y2="100" gradientUnits="userSpaceOnUse">
              <stop stopColor="#8BBEB9" />
              <stop offset="1" stopColor="#D2E4E2" />
            </linearGradient>

            {/* 배경 그라데이션 (길이를 길게 조정) */}
            <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(149, 188, 184, 0.5)" />
              <stop offset="100%" stopColor="rgba(149, 188, 184, 0)" />
            </linearGradient>
          </defs>

          {/* 그라데이션 영역 (세로 길이 조정) */}
          <path d="M50 100C100 80 150 50 200 50L200 200 Q125 200 50 200Z" fill="url(#fillGradient)" />

          {/* 그래프 곡선 */}
          <path
            d="M50 100C100 80 150 50 200 50"
            stroke="url(#lineGradient)"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          {/* 현재 몸무게 포인트 */}
          <image href={starCurrent} x="40" y="90" width="20" height="20" />
          <text
            x="30"
            y="130"
            fill="#191919"
            fontSize="16px"
            fontWeight="bold"
            className="text-[#191919] text-center text-base not-italic font-medium leading-[100%] tracking-[-0.32px]"
          >
            {currentWeight !== null && currentWeight !== undefined ? currentWeight : 'null '}kg
          </text>

          {/* 목표 몸무게 포인트 */}
          <image href={starGoal} x="190" y="40" width="20" height="20" />
          <text
            x="180"
            y="35"
            fill="#191919"
            fontSize="16px"
            fontWeight="bold"
            className="text-[#191919] text-center text-base not-italic font-medium leading-[100%] tracking-[-0.32px]"
          >
            {goalWeight !== null && goalWeight !== undefined ? goalWeight : 'null '}kg
          </text>
        </svg>
      </div>

      {/* 하단 현재 / 목표 라벨 */}
      <div className="absolute bottom-3 flex w-full justify-between px-[70px] text-black text-base not-italic font-medium leading-[121%];">
        <span>현재</span>
        <span>목표</span>
      </div>
    </Box>
  )
}

export default WeightProgressGraph
