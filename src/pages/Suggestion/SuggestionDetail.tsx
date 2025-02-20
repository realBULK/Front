import { useNavigate, useLocation } from 'react-router-dom'
import DietBox from '@/components/SuggestionDietDetailBox'
import { useState, useEffect } from 'react'
import { useSuggestionDetail } from '@/hooks/useSuggestionDetail'
import sunrise from '@/assets/sunrise.svg'
import sun from '@/assets/sun.svg'
import moon from '@/assets/moon.svg'
import snack from '@/assets/snack.svg'
import backButton from '@/assets/backButton.svg'

// import useSuggestion from '@/hooks/useSuggestion'
interface DietItem {
  id: number
  name: string
  unit: string
  gradePeopleNum: number
  grade: number
  calories: number
  carbos: number
  proteins: number
  fats: number
  gram: number
}
interface MealSummaryProps {
  date: string
  type: string
  mealCalories: number
  mealCarbos: number
  mealProteins: number
  mealFats: number
}

interface SuggestionDetailProps {
  mealSummary: MealSummaryProps
  items: DietItem[]
}

const SuggestionDetail: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const mealPlanId = location.state?.mealId
  const type = location.state?.type

  const { data } = useSuggestionDetail(mealPlanId, type)

  const iconNum = type === 'BREAKFAST' ? 0 : type === 'LUNCH' ? 1 : type === 'DINNER' ? 2 : 3
  const iconData = [sunrise, sun, moon, snack]

  // 초기 상태를 `null`로 설정하고, `data`가 로드되면 업데이트
  const [dietBoxes, setDietBoxes] = useState<SuggestionDetailProps | null>(null)

  // `data`가 로드되었을 때 `dietBoxes` 상태 업데이트
  useEffect(() => {
    if (data) {
      setDietBoxes(data.data)
    }
  }, [data])

  const date = dietBoxes?.mealSummary.date.split('-') || []
  // DietBox 삭제
  const removeDietBox = (id: number) => {
    if (!dietBoxes) return

    setDietBoxes((prev) => ({
      ...prev!,
      items: prev!.items.filter((diet) => diet.id !== id),
    }))
  }

  // 데이터가 없을 경우 로딩 상태를 표시
  if (!dietBoxes) {
    return <p>로딩 중...</p>
  }

  return (
    <div className="flex justify-center items-center flex-col mt-[30px] h-full">
      <div className="flex justify-center items-center flex-col mt-[30px] w-[80%] items-start w-full">
        <div className="block self-start w-[7px] h-[14px] ml-[20px]" onClick={() => navigate(-1)}>
          <img src={backButton} />
        </div>
        <img src={iconData[iconNum]} className="w-[126px] h-[126px] " />
        <h1 className="text-[40px] font-[GmarketSansWeight] mb-[] ">
          {date[1]}.{date[2]}
        </h1>
        <h1 className="text-[32px] font-[800]">
          {dietBoxes.mealSummary.type === 'BREAKFAST'
            ? '아침'
            : dietBoxes.mealSummary.type === 'LUNCH'
              ? '점심'
              : dietBoxes.mealSummary.type === 'DINNER'
                ? '저녁'
                : '간식'}
        </h1>
        <h1 className="text-[24px] font-[700] mb-[10px]">{dietBoxes?.mealSummary.mealCalories}kcal</h1>
        <div className="box-border flex flex-row w-[80%] justify-around mt-[11px] mb-[5px] text-[16px] font-[600] leading-[19.36px] gap-[6.5px]">
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">탄수화물</p>
            <p className="text-[14px] font-[500]">{dietBoxes?.mealSummary.mealCarbos}g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">단백질</p>
            <p className="text-[14px] font-[500]">{dietBoxes?.mealSummary.mealProteins}g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">지방</p>
            <p className="text-[14px] font-[500]">{dietBoxes?.mealSummary.mealFats}g</p>
          </div>
        </div>
        <span className="box-border w-[90%] border-[1px] border-solid border-[#DFDFDFB2] shadow-base opacity-70 my-[6px] mb-[10px]" />

        {/* DietBox 리스트 렌더링 */}
        {dietBoxes.items.map((diet) => (
          <DietBox
            key={diet.id}
            {...diet}
            onRemove={() => removeDietBox(diet.id)} // 삭제 함수 전달
            height="h-[142px]"
          >
            <button
              className="shadow-whiteBox rounded-[15px] bg-[#D2E4E2CC] h-[35px] w-[289px] pb-2 pt-2 pl-5 pr-5 flex items-center justify-center text-[14px] font-medium text-[#191919] mt-[18px]"
              onClick={() => navigate('/record/myself')}
            >
              변경
            </button>
          </DietBox>
        ))}
      </div>
    </div>
  )
}

export default SuggestionDetail
