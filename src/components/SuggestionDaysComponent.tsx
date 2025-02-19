import React, { useState } from 'react'
import DietBox from '@/components/DietBox'
interface MealItems {
  name: string
}
interface Meal {
  mealCalories: number
  mealCarbos: number
  mealFats: number
  mealItems: MealItems[]
  mealProteins: number
  type: string //아침점심저녁간식
}

interface DayData {
  dailyCalories: number
  dailyCarbos: number
  dailyFats: number
  dailyMealId: number
  dailyProteins: number
  date: string
  meals: Meal[]
}

interface SuggestionDaysComponentProps {
  data: DayData[]
}

const SuggestionDaysComponent: React.FC<SuggestionDaysComponentProps> = ({ data }) => {
  const day = ['월', '화', '수', '목', '금', '토', '일']

  const firstDataNum = data[0]?.dailyMealId
  const [selectedDay, setSelectedDay] = useState(day[0] || '월') // 기본 선택 요일

  return (
    <div className="flex flex-col gap-5">
      {/* 요일 선택 버튼 */}
      <div className="flex gap-2">
        {data.map((dayData) => (
          <button
            key={`day-btn-${dayData.dailyMealId}`} // ✅ 중복되지 않는 고유한 키 값
            onClick={() => setSelectedDay(day[dayData.dailyMealId - firstDataNum])}
            className={`text-[16px] text-black text-center text-base not-italic font-bold leading-[121%] w-10 h-7 border shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] rounded-[15px] border-solid border-[#EDEDED] 
              ${selectedDay === day[dayData.dailyMealId - firstDataNum] ? 'bg-[#95BCB8CC]' : 'bg-white hover:bg-[#D2E4E2CC]'}`}
          >
            {day[dayData.dailyMealId - firstDataNum]}
          </button>
        ))}
      </div>

      {/* 선택된 요일의 식단 리스트 */}
      {data
        .filter((dayData) => day[dayData.dailyMealId - firstDataNum] === selectedDay)
        .map((dayData) => (
          <div key={`daily-meal-${dayData.dailyMealId}`} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              {dayData.meals.map((meal, index) => (
                <DietBox
                  key={`${dayData.date}-${meal.type}-${index}`} // ✅ 더 고유한 키 값 적용
                  id={index.toString()}
                  type={meal.type}
                  items={meal.mealItems}
                  mealCalories={meal.mealCalories}
                  mealCarbos={meal.mealCarbos}
                  mealProteins={meal.mealProteins}
                  mealFats={meal.mealFats}
                  isDetail={true}
                />
              ))}
            </div>
            <div className="shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] rounded-[50px] bg-[#D2E4E2CC] w-[327px] pb-2 pt-2 pl-4 pr-4 flex items-center justify-center ">
              <p className="font-bold text-[15px]">{dayData.dailyCalories.toLocaleString('ko-KR')}kcal</p>
              <p className="ml-2 font-medium text-[13px] text-[#9E9E9E]">
                탄수화물 {dayData.dailyCarbos.toLocaleString('ko-KR')}g
              </p>
              <p className="ml-2 font-medium text-[13px] text-[#9E9E9E]">
                단백질 {dayData.dailyProteins.toLocaleString('ko-KR')}g
              </p>
              <p className="ml-2 font-medium text-[13px] text-[#9E9E9E]">
                지방 {dayData.dailyFats.toLocaleString('ko-KR')}g
              </p>
            </div>
          </div>
        ))}
    </div>
  )
}
export default SuggestionDaysComponent
