import React from 'react'
import SuggestionDaysComponent from '@/components/SuggestionDaysComponent'

const Suggestion: React.FC = () => {
  const data = [
    {
      day: '월',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '화',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '수',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '목',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '금',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '토',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
    },
    {
      day: '일',
      meals: [
        {
          title: '아침',
          items: ['오트밀 (50g)', '건과류 (한 줌)', '바나나 (1개)', '우유 (200ml)'],
          icon: <img src="/public/sunrise.svg" alt="아침" />,
        },
        {
          title: '점심',
          items: ['현미밥 (200g)', '채소 볶음 (브로콜리, 당근)', '닭가슴살 (100g)', '계란 프라이 (1개)'],
          icon: <img src="/public/sun.svg" alt="점심" />,
        },
        {
          title: '저녁',
          items: ['연어구이 (120g)', '아보카도 슬라이스 (1/2개)', '고구마 (200g)', '나물 반찬'],
          icon: <img src="/public/moon.svg" alt="저녁" />,
        },
        {
          title: '간식',
          items: ['그릭 요거트 (150g)', '블루베리 (한 줌)'],
          icon: <img src="/public/snack.svg" alt="간식" />,
        },
      ],
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
