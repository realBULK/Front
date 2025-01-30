import NavBar from '@/components/NavBar'
import ViewAllButton from './component/viewAllBtn'
import DietSlider from './component/slider'
import ScrollMenu from './component/scrollMenu'
// import { useDietMenuDaily } from '@/hooks/useDietMenu'

// interface MealItem {
//   name: string
// }

// interface Meal {
//   type: string
//   mealItems: MealItem[]
//   mealCalories: number
//   mealCarbos: number
//   mealProteins: number
//   mealFats: number
// }

const Diet: React.FC = (): JSX.Element => {
  // const getFormattedDate = (date: Date) => {
  //   return date.toISOString().split('T')[0] // '2025-01-30' 같은 형식
  // }
  // // 오늘 날짜 가져오기
  // const today = getFormattedDate(new Date())

  // const { data, isLoading, error } = useDietMenuDaily(today)

  // const dailyMeals: Meal[] = data?.meals || []

  // console.log(dailyMeals)

  // if (isLoading) return <p>로딩 중...</p>
  // if (error) return <p>에러 발생: {error.message}</p>
  const iconData = ['/src/assets/sunrise.svg', '/src/assets/sun.svg', '/src/assets/moon.svg', '/src/assets/snack.svg']

  const data = [
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
  ]
  const exampleData = [
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 현미밥 & 닭가슴살
      menu: '현미밥 & 닭가슴살',
      like: false,
      likeNum: 15,
    },
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 오트밀 & 바나나
      menu: '오트밀 & 바나나',
      like: true,
      likeNum: 24,
    },
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 고구마 & 계란프라이
      menu: '고구마 & 계란프라이',
      like: false,
      likeNum: 32,
    },
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 그릭요거트 & 견과류
      menu: '그릭요거트 & 견과류',
      like: true,
      likeNum: 40,
    },
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 연어 스테이크 & 아보카도
      menu: '연어 스테이크 & 아보카도',
      like: false,
      likeNum: 12,
    },
  ]
  const exampleData2 = [
    {
      content: '오트밀 1인분, 100g',
      review: 7,
      like: 4,
    },
    {
      content: '바나나 1개',
      review: 5,
      like: 3,
    },
    {
      content: '삶은 달걀 1개',
      review: 3,
      like: 2,
    },
    {
      content: '우유 200ml',
      review: 2,
      like: 1,
    },
    {
      content: '현미밥 1공기, 200g',
      review: 10,
      like: 5,
    },
  ]

  return (
    <div>
      <div className="flex flex-col pl-8 pr-8 min-h-screen pb-16">
        <div className="flex justify-center flex-col mt-[30px]">
          <div className="flex items-center justify-between pl-4 pr-4 text-black text-center text-[32px] not-italic font-bold leading-[100%] tracking-[-0.64px]">
            오늘 식단
            <ViewAllButton />
          </div>
          <DietSlider dietItem={data} />
        </div>
        <div className="flex justify-center flex-col mt-[60px]">
          <div className="flex items-center justify-between mb-3 text-black text-base not-italic font-bold leading-[100%] tracking-[-0.32px]">
            🏆 이번주 인기 식단 🏆
            <ViewAllButton />
          </div>
          <ScrollMenu scrollMenus={exampleData} />
        </div>
        <div className="mt-[17px] mb-[17px]">
          <div className="mb-2 text-black text-base not-italic font-bold leading-[100%] tracking-[-0.32px]">
            📑 이번주 가장 많이 기록된 식품 📑
          </div>
          <div className="flex flex-col gap-2 w-full">
            {exampleData2.map((item, index) => (
              <div key={index} className="flex items-center gap-[10px]">
                {/* 순위 원형 */}
                <div
                  className={`flex items-center justify-center w-[26px] h-[26px] rounded-full text-black text-center text-sm not-italic font-semibold leading-[100%] tracking-[-0.28px] border-[3px] ${
                    index === 0
                      ? 'border-[#FEA902] text-black' // 1등: 노랑 테두리
                      : index === 1
                        ? 'border-[#C5C6CA] text-black' // 2등: 회색 테두리
                        : index === 2
                          ? 'border-[#E1714B] text-black' // 3등: 주황 테두리
                          : 'border-black text-black' // 4등 이후는 검정 테두리
                  }`}
                >
                  {index + 1}
                </div>

                {/* 음식 정보 */}
                <div className="text-black text-sm not-italic font-medium leading-[100%] tracking-[-0.28px]">
                  {item.content}
                </div>

                {/* 좋아요 및 평점 */}
                <div className="flex items-center gap-2 ml-auto">
                  <div className="flex items-center gap-[2px] text-black text-center text-[10px] not-italic font-medium leading-[100%] tracking-[-0.2px]">
                    <img src="/src/assets/human.svg" alt="user" className="w-3 h-3" />
                    {item.review}
                  </div>
                  <div className="flex items-center gap-[2px] text-black text-center text-[10px] not-italic font-medium leading-[100%] tracking-[-0.2px]">
                    <img src="/src/assets/star.svg" alt="star" className="w-3 h-3" />
                    {item.like}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center flex-col mb-[17px]">
          <div className="flex items-center justify-between mb-3 text-black text-base not-italic font-bold leading-[100%] tracking-[-0.32px]">
            ❤️ 내가 찜한 식단 ❤️
          </div>
          <ScrollMenu scrollMenus={exampleData} />
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default Diet
