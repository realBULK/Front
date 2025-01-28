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
