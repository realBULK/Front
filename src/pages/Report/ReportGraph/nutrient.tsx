import Box from '@/components/WhiteBox'

// interface NutrientItem {
//   icon: string
//   title: string
//   quantity: number
//   unit: string
// }

const NutrientsBox: React.FC = () => {
  const itemData = [
    {
      icon: '🍚',
      title: '칼로리',
      quantity: 1500,
      unit: 'kcal',
    },

    {
      icon: '🍞',
      title: '탄수화물',
      quantity: 300,
      unit: 'g',
    },
    {
      icon: '🥩',
      title: '단백질',
      quantity: 700,
      unit: 'g',
    },
    {
      icon: '🥛',
      title: '지방',
      quantity: 500,
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
            {item.quantity}
            {item.unit}
          </div>
        </div>
      ))}
    </Box>
  )
}

export default NutrientsBox
