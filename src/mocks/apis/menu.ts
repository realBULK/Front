import { http, HttpResponse } from 'msw'

export const menu = http.get('/api/menu', () => {
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      data: {
        userId: 1,
        planMealId: 1,
        startDate: '2025-01-28',
        endDate: '2025-02-03',
        dailyMeals: [
          {
            dailyMealId: 1,
            date: '2025-01-28',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '현미밥' }, { name: '김치볶음' }, { name: '삶은 계란' }],
                mealCalories: 450,
                mealCarbos: 50,
                mealProteins: 20,
                mealFats: 10,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '불고기덮밥' }, { name: '된장찌개' }, { name: '깍두기' }],
                mealCalories: 700,
                mealCarbos: 70,
                mealProteins: 40,
                mealFats: 30,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '닭가슴살 샐러드' }, { name: '고구마' }, { name: '요거트' }],
                mealCalories: 500,
                mealCarbos: 40,
                mealProteins: 50,
                mealFats: 15,
              },
            ],
            dailyCalories: 1650,
            dailyCarbos: 160,
            dailyProteins: 110,
            dailyFats: 55,
          },
          {
            dailyMealId: 2,
            date: '2025-01-29',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '오트밀' }, { name: '바나나' }, { name: '우유' }],
                mealCalories: 400,
                mealCarbos: 60,
                mealProteins: 15,
                mealFats: 5,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '쌀국수' }, { name: '닭가슴살' }, { name: '양배추 샐러드' }],
                mealCalories: 600,
                mealCarbos: 80,
                mealProteins: 35,
                mealFats: 20,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '연어 스테이크' }, { name: '아스파라거스' }, { name: '고구마' }],
                mealCalories: 550,
                mealCarbos: 50,
                mealProteins: 45,
                mealFats: 25,
              },
            ],
            dailyCalories: 1550,
            dailyCarbos: 190,
            dailyProteins: 95,
            dailyFats: 50,
          },
          {
            dailyMealId: 3,
            date: '2025-01-30',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '토스트' }, { name: '스크램블 에그' }, { name: '블랙커피' }],
                mealCalories: 350,
                mealCarbos: 40,
                mealProteins: 25,
                mealFats: 10,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '잡곡밥' }, { name: '된장찌개' }, { name: '김치' }],
                mealCalories: 650,
                mealCarbos: 75,
                mealProteins: 30,
                mealFats: 20,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '닭가슴살 스테이크' }, { name: '고구마' }, { name: '견과류' }],
                mealCalories: 550,
                mealCarbos: 45,
                mealProteins: 50,
                mealFats: 25,
              },
            ],
            dailyCalories: 1550,
            dailyCarbos: 160,
            dailyProteins: 105,
            dailyFats: 55,
          },
          {
            dailyMealId: 4,
            date: '2025-01-31',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '팬케이크' }, { name: '메이플 시럽' }, { name: '오렌지 주스' }],
                mealCalories: 500,
                mealCarbos: 80,
                mealProteins: 10,
                mealFats: 10,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '김치볶음밥' }, { name: '계란 프라이' }, { name: '콩나물국' }],
                mealCalories: 700,
                mealCarbos: 85,
                mealProteins: 30,
                mealFats: 20,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '참치 샐러드' }, { name: '견과류' }, { name: '요거트' }],
                mealCalories: 500,
                mealCarbos: 40,
                mealProteins: 45,
                mealFats: 20,
              },
            ],
            dailyCalories: 1700,
            dailyCarbos: 205,
            dailyProteins: 85,
            dailyFats: 50,
          },
          {
            dailyMealId: 5,
            date: '2025-02-01',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '베이글' }, { name: '크림치즈' }, { name: '아메리카노' }],
                mealCalories: 480,
                mealCarbos: 65,
                mealProteins: 15,
                mealFats: 10,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '돼지불백' }, { name: '쌈채소' }, { name: '잡곡밥' }],
                mealCalories: 750,
                mealCarbos: 85,
                mealProteins: 40,
                mealFats: 35,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '훈제연어' }, { name: '아보카도 샐러드' }, { name: '호두' }],
                mealCalories: 600,
                mealCarbos: 50,
                mealProteins: 45,
                mealFats: 30,
              },
            ],
            dailyCalories: 1830,
            dailyCarbos: 200,
            dailyProteins: 100,
            dailyFats: 75,
          },
          {
            dailyMealId: 6,
            date: '2025-02-02',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '토마토 주스' }, { name: '삶은 계란' }, { name: '견과류' }],
                mealCalories: 400,
                mealCarbos: 35,
                mealProteins: 30,
                mealFats: 15,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '된장찌개' }, { name: '고등어구이' }, { name: '현미밥' }],
                mealCalories: 700,
                mealCarbos: 75,
                mealProteins: 40,
                mealFats: 30,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '닭가슴살 스테이크' }, { name: '고구마' }, { name: '블루베리 요거트' }],
                mealCalories: 550,
                mealCarbos: 40,
                mealProteins: 50,
                mealFats: 25,
              },
            ],
            dailyCalories: 1650,
            dailyCarbos: 150,
            dailyProteins: 120,
            dailyFats: 70,
          },
          {
            dailyMealId: 7,
            date: '2025-02-03',
            meals: [
              {
                type: 'BREAKFAST',
                mealItems: [{ name: '귀리 오트밀' }, { name: '블랙커피' }, { name: '호두' }],
                mealCalories: 420,
                mealCarbos: 55,
                mealProteins: 15,
                mealFats: 10,
              },
              {
                type: 'LUNCH',
                mealItems: [{ name: '김치볶음밥' }, { name: '계란 프라이' }, { name: '미역국' }],
                mealCalories: 680,
                mealCarbos: 80,
                mealProteins: 35,
                mealFats: 25,
              },
              {
                type: 'DINNER',
                mealItems: [{ name: '스테이크' }, { name: '아스파라거스' }, { name: '감자구이' }],
                mealCalories: 700,
                mealCarbos: 60,
                mealProteins: 60,
                mealFats: 40,
              },
            ],
            dailyCalories: 1800,
            dailyCarbos: 195,
            dailyProteins: 110,
            dailyFats: 75,
          },
        ],
      },
    },
  )
})

export const menuDetail = http.get('/api/menu/:mealId/:mealType', ({ params }) => {
  const { mealId, mealType } = params
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      message: `식단 (${mealId}, ${mealType})이 성공적으로 업데이트되었습니다.`,
    },
  )
})

export const menuChange = http.put('/api/menu/:mealId/:mealType', async ({ params, request }) => {
  const { mealId, mealType } = params
  const body = await request.json() // 요청 데이터 추출

  if (!body || Object.keys(body).length === 0) {
    return HttpResponse.json(
      {
        isSuccess: false,
        code: '400',
        message: '변경할 데이터가 없습니다.',
        status: 'BAD_REQUEST',
      },
      { status: 400 },
    )
  }
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    { message: `식단 (${mealId}, ${mealType})이 성공적으로 업데이트되었습니다.` },
  )
})
