import { http, HttpResponse } from 'msw'

export const menu = http.get('/api/menu', () => {
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      date: '2025-01-20',
      user_id: '1',
      menu_data: [
        {
          type: '아침',
          items: ['오트밀', '바나나', '닭가슴살'],
          calories: 449,
          nutrition: {
            carbs: 55,
            protein: 16,
            fat: 18,
          },
        },
        {
          type: '점심',
          items: ['현미밥', '닭가슴살', '채소볶음'],
          calories: 449,
          nutrition: {
            carbs: 55,
            protein: 16,
            fat: 18,
          },
        },
        {
          type: '저녁',
          items: ['연어구이', '고구마', '아보카도'],
          calories: 449,
          nutrition: {
            carbs: 55,
            protein: 16,
            fat: 18,
          },
        },
        {
          type: '간식',
          items: ['요거트(그릭요거트)', '블루베리'],
          calories: 449,
          nutrition: {
            carbs: 55,
            protein: 16,
            fat: 18,
          },
        },
      ],
      total: {
        calories: 1565,
        nutrition: {
          carbs: 201,
          protein: 98,
          fat: 82,
        },
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
