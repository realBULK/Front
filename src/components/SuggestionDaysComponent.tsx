import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@/components/WhiteBox'

interface Meal {
  id: string
  title: string
  items: string[]
  nutrients: string[]
  Kcal: number
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
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState(data[0]?.day || '월') // 기본 선택 요일

  return (
    <div className="flex flex-col gap-4 mb-[44px]">
      {/* 요일 선택 버튼 */}
      <div className="flex gap-2">
        {data.map((dayData) => (
          <button
            key={dayData.day}
            onClick={() => setSelectedDay(dayData.day)}
            className={`text-[16px] text-black text-center text-base not-italic font-bold leading-[121%] w-10 h-7 border shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#EDEDED] 
              ${selectedDay === dayData.day ? 'bg-[#95BCB8CC]' : 'bg-white hover:bg-[#D2E4E2CC]'}`}
          >
            {dayData.day}
          </button>
        ))}
      </div>

      {/* 선택된 요일의 식단 리스트 */}
      {data
        .filter((dayData) => dayData.day === selectedDay) // 선택된 요일만 표시
        .map((dayData) => (
          <div key={dayData.day} className="flex flex-col gap-2">
            {dayData.meals.map((meal) => (
              <button key={meal.id} onClick={() => navigate(`/recommendation/${meal.id}`)} className="w-full">
                <Box className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg cursor-pointer transition hover:shadow-lg">
                  {/* 아이콘 */}
                  {meal.icon && <div className="w-8 h-8 flex-shrink-0">{meal.icon}</div>}

                  {/* 식사 정보 */}
                  <div className="flex flex-col flex-1">
                    {/* 제목 */}
                    <div className="flex items-center gap-2">
                      <span className="text-black text-[14px] font-bold">{meal.title}</span>
                    </div>

                    {/* 식사 항목 */}
                    <p className="text-[12px] text-gray-600">{meal.items.join(', ')}</p>

                    {/* 영양 정보 및 칼로리 */}
                    <div className="flex justify-between text-[12px] text-gray-500 mt-1">
                      <span>{meal.nutrients.join(' ')}</span>
                      <span className="font-bold text-black">{meal.Kcal} kcal</span>
                    </div>
                  </div>
                </Box>
              </button>
            ))}
          </div>
        ))}
    </div>
  )
}

export default SuggestionDaysComponent
