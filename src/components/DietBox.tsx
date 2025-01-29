import Box from '@/components/WhiteBox'
import { useNavigate } from 'react-router-dom'

interface MealProps {
  id: string
  title: string
  items: string[]
  nutrients: string[]
  Kcal: number
  icon?: string
  isDetail?: boolean
}

const DietBox: React.FC<MealProps> = ({ id, title, items, nutrients, Kcal, icon, isDetail }) => {
  const navigate = useNavigate()

  return (
    <Box
      className=" h-[100px] shadow-whiteBox gap-4 cursor-pointer hover:shadow-lg text-[#191919]"
      as="button"
      onClick={() => navigate(`/suggestion/${id}`)}
      key={id}
    >
      <div className="flex flex-col items-center justify-center relative">
        {/* 아이콘 */}
        {icon && <img src={icon} alt="아이콘" />}
        {/* 제목 */}
        <div className="mt-1 text-center text-black text-[14px] font-bold">{title}</div>
      </div>
      {/* 식사 정보 */}
      <div className="flex flex-col flex-1 text-left gap-1">
        {/* 식사 항목 */}
        {/* 식사 항목 - 3개까지만 표시하고 '등' 추가 */}
        <p className="text-[16px] font-medium">
          {items.length > 3 ? `${items.slice(0, 3).join(', ')} 등` : items.join(', ')}
        </p>
        <span className="text-[14px] font-light">{nutrients.join(' ')}</span>
        <span className="text-[16px] font-semibold">{Kcal} kcal</span>
      </div>
      {isDetail ? <img src="/src/assets/back.svg" alt="back" /> : null}
    </Box>
  )
}

export default DietBox
