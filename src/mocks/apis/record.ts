import { http, HttpResponse } from 'msw'

export const recordData = http.post('/api/user/record', async ({ request }) => {
  const body = await request.json() // 요청 데이터 추출

  if (!body || Object.keys(body).length === 0) {
    return HttpResponse.json(
      {
        status: 400,
        message: '변경할 데이터가 없습니다.',
      },
      { status: 400 },
    )
  }

  return HttpResponse.json({
    status: 201,
    message: '기록이 성공적으로 작성되었습니다.',
    data: {
      recordId: 1,
      userId: 1,
      foodPhoto: 'https://s3.amazonaws.com/bucket-name/food-photo.jpg',
      ateOnPlan: true,
      date: '2025-01-10',
      mealType: '아침',
      recordedFoods: [
        {
          recordedFoodId: 1,
          foodName: '사과',
          gram: 150,
          calories: 80,
          carbohydrates: 20,
          protein: 0,
          fat: 0,
        },
        {
          recordedFoodId: 2,
          foodName: '쌀',
          gram: 200,
          calories: 300,
          carbohydrates: 68,
          protein: 6,
          fat: 1,
        },
      ],
    },
  })
})
