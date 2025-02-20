import Box from '@/components/WhiteBox'

interface Nutrient {
  calories: number | null
  carbos: number | null
  proteins: number | null
  fats: number | null
}

const NutrientsBox: React.FC<Nutrient> = ({ calories, carbos, proteins, fats }) => {
  const itemData = [
    {
      icon: '🍚',
      title: '칼로리',
      quantity: calories,
      unit: 'kcal',
    },
    {
      icon: '🍞',
      title: '탄수화물',
      quantity: carbos,
      unit: 'g',
    },
    {
      icon: '🥩',
      title: '단백질',
      quantity: proteins,
      unit: 'g',
    },
    {
      icon: '🥛',
      title: '지방',
      quantity: fats,
      unit: 'g',
    },
  ]

  return (
    <Box className="flex gap-2 h-[130px] justify-between shadow-whiteBoxDeepShadow">
      {itemData.map((item, index) => (
        <div key={index} className="flex flex-col gap-2 items-center">
          <div className="text-[16px]">{item.icon}</div>
          <div className="text-[16px] text-black text-center text-base not-italic font-normal leading-[121%]">
            {item.title}
          </div>
          <div className="text-[16px] text-black text-center text-base not-italic font-normal leading-[121%]">
            {item.quantity !== null && item.quantity !== undefined ? item.quantity.toLocaleString('ko-KR') : 'null'}
            {item.quantity !== null && item.quantity !== undefined ? item.unit : ''}
          </div>
        </div>
      ))}
    </Box>
  )
}

export default NutrientsBox
