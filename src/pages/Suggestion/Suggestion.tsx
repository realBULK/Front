import React from 'react'
import SuggestionDaysComponent from '@/components/SuggestionDaysComponent'
import { K } from 'react-router/dist/development/fog-of-war-DLtn2OLr'
import { i } from 'react-router/dist/development/route-data-aSUFWnQ6'

const Suggestion: React.FC = () => {
  const iconData = ['/src/assets/sunrise.svg', '/src/assets/sun.svg', '/src/assets/moon.svg', '/src/assets/snack.svg']

  const data = [
    {
      day: '월',
      meals: [
        {
          id: '1',
          title: '아침',
          items: ['오트밀', '바나나', '삶은 달걀', '우유'],
          nutrients: ['탄수화물 55g', '단백질 18g', '지방 10g'],
          Kcal: 450,
          icon: iconData[0],
        },
        {
          id: '2',
          title: '점심',
          items: ['현미밥', '닭가슴살', '미역국', '브로콜리 볶음'],
          nutrients: ['탄수화물 60g', '단백질 35g', '지방 12g'],
          Kcal: 550,
          icon: iconData[1],
        },
        {
          id: '3',
          title: '저녁',
          items: ['연어구이', '고구마', '아보카도', '양배추 샐러드'],
          nutrients: ['탄수화물 40g', '단백질 30g', '지방 20g'],
          Kcal: 600,
          icon: iconData[2],
        },
        {
          id: '4',
          title: '간식',
          items: ['그릭요거트', '블루베리', '견과류'],
          nutrients: ['탄수화물 20g', '단백질 15g', '지방 12g'],
          Kcal: 250,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '화',
      meals: [
        {
          id: '5',
          title: '아침',
          items: ['토스트', '땅콩버터', '바나나', '블랙커피'],
          nutrients: ['탄수화물 55g', '단백질 20g', '지방 15g'],
          Kcal: 480,
          icon: iconData[0],
        },
        {
          id: '6',
          title: '점심',
          items: ['잡곡밥', '소고기 미역국', '배추김치', '계란말이'],
          nutrients: ['탄수화물 65g', '단백질 30g', '지방 14g'],
          Kcal: 570,
          icon: iconData[1],
        },
        {
          id: '7',
          title: '저녁',
          items: ['닭가슴살 샐러드', '고구마', '호두', '아몬드'],
          nutrients: ['탄수화물 50g', '단백질 28g', '지방 18g'],
          Kcal: 500,
          icon: iconData[2],
        },
        {
          id: '8',
          title: '간식',
          items: ['삶은 달걀', '바나나', '호두'],
          nutrients: ['탄수화물 15g', '단백질 12g', '지방 8g'],
          Kcal: 200,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '수',
      meals: [
        {
          id: '9',
          title: '아침',
          items: ['귀리죽', '호두', '두유'],
          nutrients: ['탄수화물 50g', '단백질 15g', '지방 12g'],
          Kcal: 430,
          icon: iconData[0],
        },
        {
          id: '10',
          title: '점심',
          items: ['고구마', '닭가슴살', '야채볶음', '콩나물국'],
          nutrients: ['탄수화물 55g', '단백질 30g', '지방 10g'],
          Kcal: 520,
          icon: iconData[1],
        },
        {
          id: '11',
          title: '저녁',
          items: ['훈제오리', '현미밥', '쌈채소', '된장찌개'],
          nutrients: ['탄수화물 45g', '단백질 35g', '지방 25g'],
          Kcal: 600,
          icon: iconData[2],
        },
        {
          id: '12',
          title: '간식',
          items: ['사과', '고구마', '아몬드'],
          nutrients: ['탄수화물 40g', '단백질 8g', '지방 7g'],
          Kcal: 280,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '목',
      meals: [
        {
          id: '13',
          title: '아침',
          items: ['요거트', '그래놀라', '사과'],
          nutrients: ['탄수화물 50g', '단백질 18g', '지방 12g'],
          Kcal: 420,
          icon: iconData[0],
        },
        {
          id: '14',
          title: '점심',
          items: ['흑미밥', '불고기', '나물 반찬', '김치'],
          nutrients: ['탄수화물 60g', '단백질 35g', '지방 14g'],
          Kcal: 570,
          icon: iconData[1],
        },
        {
          id: '15',
          title: '저녁',
          items: ['연어 스테이크', '구운 채소', '고구마'],
          nutrients: ['탄수화물 40g', '단백질 32g', '지방 22g'],
          Kcal: 610,
          icon: iconData[2],
        },
        {
          id: '16',
          title: '간식',
          items: ['치즈', '견과류', '두유'],
          nutrients: ['탄수화물 25g', '단백질 20g', '지방 15g'],
          Kcal: 300,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '금',
      meals: [
        {
          id: '17',
          title: '아침',
          items: ['시리얼', '우유', '딸기'],
          nutrients: ['탄수화물 55g', '단백질 15g', '지방 10g'],
          Kcal: 450,
          icon: iconData[0],
        },
        {
          id: '18',
          title: '점심',
          items: ['현미밥', '제육볶음', '김치찌개'],
          nutrients: ['탄수화물 65g', '단백질 35g', '지방 20g'],
          Kcal: 590,
          icon: iconData[1],
        },
        {
          id: '19',
          title: '저녁',
          items: ['닭가슴살', '퀴노아 샐러드', '고구마'],
          nutrients: ['탄수화물 45g', '단백질 30g', '지방 15g'],
          Kcal: 500,
          icon: iconData[2],
        },
        {
          id: '20',
          title: '간식',
          items: ['바나나', '그래놀라', '아몬드'],
          nutrients: ['탄수화물 30g', '단백질 10g', '지방 8g'],
          Kcal: 250,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '토',
      meals: [
        {
          id: '21',
          title: '아침',
          items: ['토스트', '딸기잼', '아몬드'],
          nutrients: ['탄수화물 50g', '단백질 18g', '지방 12g'],
          Kcal: 420,
          icon: iconData[0],
        },
        {
          id: '22',
          title: '점심',
          items: ['현미밥', '닭볶음탕', '나물 반찬'],
          nutrients: ['탄수화물 60g', '단백질 35g', '지방 14g'],
          Kcal: 570,
          icon: iconData[1],
        },
        {
          id: '23',
          title: '저녁',
          items: ['연어 스테이크', '구운 채소', '감자구이'],
          nutrients: ['탄수화물 40g', '단백질 32g', '지방 22g'],
          Kcal: 610,
          icon: iconData[2],
        },
        {
          id: '24',
          title: '간식',
          items: ['치즈', '호두', '두유'],
          nutrients: ['탄수화물 25g', '단백질 20g', '지방 15g'],
          Kcal: 300,
          icon: iconData[3],
        },
      ],
    },
    {
      day: '일',
      meals: [
        {
          id: '25',
          title: '아침',
          items: ['오트밀', '블루베리', '우유'],
          nutrients: ['탄수화물 55g', '단백질 15g', '지방 10g'],
          Kcal: 450,
          icon: iconData[0],
        },
        {
          id: '26',
          title: '점심',
          items: ['현미밥', '닭볶음탕', '콩나물무침'],
          nutrients: ['탄수화물 65g', '단백질 35g', '지방 20g'],
          Kcal: 590,
          icon: iconData[1],
        },
        {
          id: '27',
          title: '저녁',
          items: ['닭가슴살', '야채볶음', '고구마'],
          nutrients: ['탄수화물 45g', '단백질 30g', '지방 15g'],
          Kcal: 500,
          icon: iconData[2],
        },
        {
          id: '28',
          title: '간식',
          items: ['바나나', '그래놀라', '아몬드'],
          nutrients: ['탄수화물 30g', '단백질 10g', '지방 8g'],
          Kcal: 250,
          icon: iconData[3],
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
      <div className="mt-6 flex flex-col">
        <SuggestionDaysComponent data={data} />
      </div>
    </div>
  )
}

export default Suggestion
