import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@/components/WhiteBox'

interface Meal {
  id: string
  title: string
  items: string[]
  nutrients: string[]
  Kcal: number
  icon?: string
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
    <div className="flex flex-col gap-6 mb-[44px]">
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
              <button key={meal.id} onClick={() => navigate(`/suggestion/${meal.id}`)} className="w-full">
                <Box className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg cursor-pointer transition hover:shadow-lg h-[100px] text-[#191919]">
                  <div className="flex flex-col items-center justify-center relative">
                    {/* 아이콘 */}
                    {meal.icon && <img src={meal.icon} alt="아이콘" />}
                    {/* 제목 */}
                    <div className="mt-1 text-center text-black text-[14px] font-bold">{meal.title}</div>
                  </div>
                  {/* 식사 정보 */}
                  <div className="flex flex-col flex-1 text-left gap-1">
                    {/* 식사 항목 */}
                    {/* 식사 항목 - 3개까지만 표시하고 '등' 추가 */}
                    <p className="text-[16px] font-medium">
                      {meal.items.length > 3 ? `${meal.items.slice(0, 3).join(', ')} 등` : meal.items.join(', ')}
                    </p>
                    <span className="text-[14px] font-light">{meal.nutrients.join(' ')}</span>
                    <span className="text-[16px] font-semibold">{meal.Kcal} kcal</span>
                  </div>
                  <img src="/src/assets/back.svg" alt="back" />
                </Box>
              </button>
            ))}
          </div>
        ))}
    </div>
  )
}

export default SuggestionDaysComponent
