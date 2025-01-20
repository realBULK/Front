import React from 'react'
import SuggestionDaysComponent from '@/components/SuggestionDaysComponent'
import { K } from 'react-router/dist/development/fog-of-war-DLtn2OLr'

const Suggestion: React.FC = () => {
  const data = [
    {
      day: '월',
      meals: [
        {
          title: '아침',
          items: ['오트밀', '바나나', '닭가슴살'],
          nutrients: ['탄수화물 55g', '단백질 16g', '지방 18g'],
          Kcal: 449,
          icon: <img src="/src/assets/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥', '채소볶음', '닭가슴살'],
          nutrients: ['탄수화물 55g', '단백질 16g', '지방 18g'],
          Kcal: 449,
          icon: <img src="/src/assets/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이', '아보카도', '고구마'],
          nutrients: ['탄수화물 55g', '단백질 16g', '지방 18g'],
          Kcal: 449,
          icon: <img src="/src/assets/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['요거트(그릭요거트)', '블루베리'],
          nutrients: ['탄수화물 55g', '단백질 16g', '지방 18g'],
          Kcal: 449,
          icon: <img src="/src/assets/snack.svg" alt="간식" />,
        },
      ],
    },
  ]

  const totalKcal = [
    {
      Carbohydrate: 201,
      Protein: 98,
      Fat: 82,
      Kcal: 1796,
    },
  ]

  return (
    <div className="flex h-screen pr-8 pl-8 pt-11 pb-11 flex-col">
      <div className="flex w-[300px] h-[89px] flex-col justify-center shrink-0 text-black text-[40px] not-italic font-medium leading-[121%] font-[GmarketSansWeight]">
        일주일 식단이<br></br>만들어 졌어요!
      </div>
      <div className="mt-[25px] flex flex-col">
        <SuggestionDaysComponent data={data} />
      </div>
    </div>
  )
}

export default Suggestion
