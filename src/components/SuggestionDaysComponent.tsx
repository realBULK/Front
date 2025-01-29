import React, { useState } from 'react'
import DietBox from '@/components/DietBox'

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
  const [selectedDay, setSelectedDay] = useState(data[0]?.day || '월') // 기본 선택 요일

  return (
    <div className="flex flex-col gap-5">
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
              <DietBox
                id={meal.id}
                title={meal.title}
                items={meal.items}
                nutrients={meal.nutrients}
                Kcal={meal.Kcal}
                icon={meal.icon}
                isDetail={true}
              />
            ))}
          </div>
        ))}
    </div>
  )
}

export default SuggestionDaysComponent
