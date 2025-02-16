import { http, HttpResponse } from 'msw'

export const popularity = http.get('/api/search/popularity', () => {
  return HttpResponse.json({
    isSuccess: true,
    code: '200',
    message: '요청에 성공했습니다.',
    status: 'OK',
    data: [
      {
        name: '오트밀',
        unit: '그램',
        gradePeopleNum: 0,
        grade: 0,
      },
      {
        name: '바나나',
        unit: '개',
        gradePeopleNum: 0,
        grade: 0,
      },
      {
        name: '견과류 믹스',
        unit: '그램',
        gradePeopleNum: 0,
        grade: 0,
      },
      {
        name: '현미밥',
        unit: '공기',
        gradePeopleNum: 0,
        grade: 0,
      },
      {
        name: '닭가슴살',
        unit: '인분',
        gradePeopleNum: 0,
        grade: 0,
      },
    ],
  })
})
