import { http, HttpResponse } from 'msw'

export const home = http.get('/api/home/info', () => {
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      data: {
        characterData: {
          id: 1,
          name: 'BULLLLLLLLLK',
          level: 3,
          point: 70,
        },
        userFoodData: {
          setting: {
            calories: 1500,
            carbohydrates: 140,
            protein: 60,
            fat: 100,
          },
          dailyyFoodData: {
            calories: 1350,
            carbohydrates: 100,
            protein: 30,
            fat: 80,
          },
        },
      },
    },
  )
})
