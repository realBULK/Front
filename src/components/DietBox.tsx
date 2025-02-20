import Box from '@/components/WhiteBox'
import { useNavigate } from 'react-router-dom'

interface MealItems {
  name: string
}
interface MealProps {
  id: string
  type: string //아침점심저녁간식
  items?: MealItems[]
  mealCalories: number
  mealCarbos: number
  mealProteins: number
  mealFats: number
  isDetail?: boolean
}

const iconData = ['/src/assets/sunrise.svg', '/src/assets/sun.svg', '/src/assets/moon.svg', '/src/assets/snack.svg']

const DietBox: React.FC<MealProps> = ({
  id,
  type,
  items,
  mealCalories,
  mealCarbos,
  mealProteins,
  mealFats,
  isDetail,
}) => {
  const navigate = useNavigate()
  const title = type === 'BREAKFAST' ? '아침' : type === 'LUNCH' ? '점심' : type === 'DINNER' ? '저녁' : '간식'
  const typeIndex = type === 'BREAKFAST' ? 0 : type === 'LUNCH' ? 1 : type === 'DINNER' ? 2 : 3

  const itemsString = items?.map((item) => item.name) || []

  const onClickHandler = () => {
    if (isDetail) {
      navigate(`/suggestion/${id}/${type}`, { state: { mealId: id, type: type } })
    }
  }
  return (
    <Box
      className=" h-[100px] shadow-whiteBox gap-4 cursor-pointer hover:shadow-lg text-[#191919] w-full p-4"
      as="button"
      onClick={onClickHandler}
      key={typeIndex}
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* 아이콘 */}
        {iconData[Number(typeIndex)] && <img src={iconData[Number(typeIndex)]} alt="아이콘" />}
        {/* 제목 */}
        <div className="mt-1 text-center text-black text-[14px] font-bold">{title}</div>
      </div>
      {/* 식사 정보 */}
      <div className="flex flex-col flex-1 text-left gap-1">
        {/* 식사 항목 */}
        {/* 식사 항목 - 3개까지만 표시하고 '등' 추가 */}
        <p className="text-[16px] font-medium whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
          {itemsString.length > 3 ? `${itemsString.slice(0, 3).join(', ')} 등` : itemsString.join(', ')}
        </p>
        <span className="text-[14px] font-light">
          탄수화물 {mealCarbos}g 단백질 {mealProteins}g 지방 {mealFats}g
        </span>
        <span className="text-[16px] font-semibold">{mealCalories} kcal</span>
      </div>
      {isDetail ? <img src="/src/assets/back.svg" alt="back" /> : null}
    </Box>
  )
}

export default DietBox
