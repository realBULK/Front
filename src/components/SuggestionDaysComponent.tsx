import React from 'react'
import Box from '@/components/WhiteBox' // 준비된 Box 컴포넌트 import

interface Meal {
  title: string
  items: string[]
  icon?: React.ReactNode
}

interface DayData {
  day: string
  meals: Meal[]
}

interface SuggestionDaysComponentProps {
  data: DayData[]
}

const SuggestionDaysComponent: React.FC<SuggestionDaysComponentProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-6 mb-[44px]">
      {data.map((dayData) => (
        <div key={dayData.day} className="flex flex-col gap-4">
          {/* 요일 */}
          <h2 className="text-black text-[32px] not-italic font-bold leading-[121%] font-[Pretendard]">
            {dayData.day}
          </h2>

          {/* 식사 카드 */}
          {dayData.meals.map((meal) => (
            <Box key={meal.title} className="flex items-start gap-4">
              {/* 아이콘 */}
              {meal.icon && <div className="w-7 h-7 flex-shrink-0">{meal.icon}</div>}
              {/* 제목 */}
              <div className="text-black text-center text-sm not-italic font-bold leading-[121%] font-[Pretendard] flex-shrink-0 w-[30px] ">
                {meal.title}
              </div>
              {/* 식사 정보 */}
              <div className="flex-1">
                <ul className="flex flex-wrap text-black text-[10px] not-italic font-light leading-[121%] font-[Pretendard]">
                  {meal.items.map((item, index) => (
                    <li key={index} className="w-[calc(100%/2)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Box>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SuggestionDaysComponent
