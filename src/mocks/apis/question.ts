import { http, HttpResponse } from "msw";

export const userData = http.patch('/api/user/question?id=2', () => {
  return HttpResponse.json(

    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      data: {
        id: 2,
        nickname: '테스트입니다2',
        height: 160.0,
        weight: 47.0,
        goalWeight: 49.0,
        activityLevel: '적음',
        mealNumber: '2끼',
        cookTime: '30분 이상',
        deliveryNum: '가끔',
        mealTime: '매우 규칙적',
        eatingOut: '가끔 있음',
        favoriteFood: '미나리, 느타리버섯, 칼국수, 소고기',
        updatedAt: '2025-01-20T16:05:02.160313',
      },
    },
  )
})




export const userDuplicate = http.get("/api/user/question/isDuplicated/:nickname", ({ params }) => {
  const nickname = typeof params.nickname === "string" ? params.nickname : ""; 

  const duplicatedNicknames = ["중복된닉네임", "테스트닉네임"];
  const isDuplicated = duplicatedNicknames.includes(nickname); 

  return HttpResponse.json({
    isSuccess: true,
    code: "200",
    message: isDuplicated ? "중복된 닉네임입니다." : "사용 가능한 닉네임입니다.",
    status: "OK",
    data: {
      duplicated: isDuplicated,
    },
  });
});




export const userReport = http.get('/api/user/question/report', () => {
  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      data: {
        id: 2,
        weight: 47.0,
        goalWeight: 49.0,
        calories: 1200,
        carbos: 200,
        proteins: 550,
        fats: 400,
      },
    },
  )
})




export const userReportPatch = http.patch('/api/user/question/report', async ({ request }) => {
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
    {
      isSuccess: true,
      code: '200',
      message: '요청에 성공했습니다.',
      status: 'OK',
      data: {
        id: 1,
        calories: 1500,
        carbos: 300,
        proteins: 700,
        fats: 500,
      },
    },
  )
})
