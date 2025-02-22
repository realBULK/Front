import NavBar from '@/components/NavBar'
import ViewAllButton from './component/viewAllBtn'
import DietSlider from './component/slider'
import ScrollMenu from './component/scrollMenu'
import { useNavigate } from 'react-router'
import { usePopularMenu } from '@/hooks/usePopularMenu'
import human from '@/assets/human.svg'
import star from '@/assets/star.svg'
import { useTodayMeal } from '@/hooks/useTodayMeal'
import DietBoxSkeleton from '@/components/DietBoxSkeleton'

interface PopularMenu {
  name: string
  unit: string
  gradePeopleNum: number
  grade: number
}

const Diet: React.FC = () => {
  const navigate = useNavigate()
  const mealID = Number(localStorage.getItem('todayDailyMeal'))
  const { data: todayMeal } = useTodayMeal(mealID)
  const { data: popularMenu, isLoading: popularMenuIsLoading, error: popularMenuError } = usePopularMenu()

  console.log('todayMeal', todayMeal)

  const data = todayMeal?.data.meals

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
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 오트밀 & 바나나
      menu: '오트밀 & 바나나',
      like: true,
      likeNum: 24,
    },
    {
      img: 'https://static.cdn.kmong.com/gigs/fPoZ31584321311.jpg', // 그릭요거트 & 견과류
      menu: '그릭요거트 & 견과류',
      like: true,
      likeNum: 40,
    },
  ]

  const mealPlanId = Number(localStorage.getItem('mealPlanId'))

  return (
    <div>
      <div className="flex flex-col pl-8 pr-8 h-screen pb-16  overflow-y-scroll overflow-x-hidden">
        <div className="flex justify-center flex-col mt-[30px] ">
          <div className="flex items-center justify-between pl-4 pr-4 text-black text-center text-[32px] not-italic font-bold leading-[100%] tracking-[-0.64px]">
            오늘 식단
            <ViewAllButton onClick={() => navigate('/diet/today', { state: { mealPlanId: mealPlanId } })} />
            {/* 추후 수정 */}
          </div>
          {data ? <DietSlider dietItem={data} /> : <DietBoxSkeleton />}
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
          {popularMenuIsLoading ? (
            <p>로딩 중...</p>
          ) : popularMenuError ? (
            <p>에러 발생</p>
          ) : (
            <div className="flex flex-col gap-2 w-full">
              {popularMenu?.data.map((item: PopularMenu, index: number) => (
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
                    {item.name} {item.unit}
                  </div>

                  {/* 좋아요 및 평점 */}
                  <div className="flex items-center gap-2 ml-auto">
                    <div className="flex items-center gap-[2px] text-black text-center text-[10px] not-italic font-medium leading-[100%] tracking-[-0.2px]">
                      <img src={human} alt="user" className="w-3 h-3" />
                      {item.gradePeopleNum}
                    </div>
                    <div className="flex items-center gap-[2px] text-black text-center text-[10px] not-italic font-medium leading-[100%] tracking-[-0.2px]">
                      <img src={star} alt="star" className="w-3 h-3" />
                      {item.grade}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-center flex-col mb-[17px]">
          <div className="flex items-center justify-between mb-3 text-black text-base not-italic font-bold leading-[100%] tracking-[-0.32px]">
            ❤️ 내가 찜한 식단 ❤️
          </div>
          <ScrollMenu scrollMenus={exampleData2} />
        </div>
      </div>
      <NavBar />
    </div>
  )
}

export default Diet
