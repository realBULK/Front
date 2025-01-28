import { http, HttpResponse } from 'msw'

export const groupMap = http.get('/api/grups/:groupId/map', ({ params }) => {
  const { groupId } = params

  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: 'COMMON200',
      message: '성공입니다.',
      result: {
        groupId: groupId,
        currentStage: 5,
        stages: [
          {
            stageNumber: 1,
            recordedUsers: 8,
            totalUsers: 10,
          },
          {
            stageNumber: 2,
            recordedUsers: 9,
            totalUsers: 10,
          },
          {
            stageNumber: 3,
            recordedUsers: 6,
            totalUsers: 10,
          },
          {
            stageNumber: 4,
            recordedUsers: 7,
            totalUsers: 10,
          },
        ],
      },
    },
  )
})

export const groupList = http.get('/api/groups/:groupId/today', ({ params }) => {
  const { groupId } = params

  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: 'COMMON200',
      message: '성공입니다.',
      result: {
        groupId: groupId,
        todayMembers: [
          {
            userId: 1,
            nickname: 'UserA',
            characterId: 12,
            emojis: [
              {
                emojiType: 'heart',
                count: 3,
              },
              {
                emojiType: 'special',
                count: 1,
              },
            ],
          },
          {
            userId: 3,
            nickname: 'UserC',
            characterId: 20,
            emojis: [
              {
                emojiType: 'heart',
                count: 2,
              },
            ],
          },
        ],
      },
    },
  )
})

export const groupEmoji = http.post('/api/groups/:groupId/emojis', async ({ request }) => {
  const body = await request.json() // 요청 데이터 추출

  if (!body || Object.keys(body).length === 0) {
    return HttpResponse.json(
      {
        isSuccess: false,
        code: 'COMMON400',
        message: '변경할 데이터가 없습니다.',
      },
      { status: 400 },
    )
  }

  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: 'COMMON200',
      message: '성공입니다.',
      result: {
        emojiRecordId: 302,
        createdAt: '2025-01-05T13:00:00',
      },
    },
  )
})

export const groupEmojiPatch = http.patch('/api/groups/:groupId/emojis/:emojiId', async ({ params, request }) => {
  const { emojiId } = params
  const body = await request.json() // 요청 데이터 추출

  if (!body || Object.keys(body).length === 0) {
    return HttpResponse.json(
      {
        isSuccess: false,
        code: 'COMMON400',
        message: '변경할 데이터가 없습니다.',
      },
      { status: 400 },
    )
  }

  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: 'COMMON200',
      message: '성공입니다.',
      result: {
        emojiRecordId: emojiId,
        updatedAt: '2025-01-05T14:00:00',
      },
    },
  )
})

export const groupEmojiDelete = http.delete('/api/groups/:groupId/emojis/:emojiId', async ({ params }) => {
  const { emojiId } = params

  return HttpResponse.json(
    // 서버에서 반환된 데이터 예시
    {
      isSuccess: true,
      code: 'COMMON200',
      message: `성공입니다. ${emojiId} 삭제`,
      result: null,
    },
  )
})

export const groupLank = http.get('/api/groups/lank', () => {
  return HttpResponse
    .json
    // 서버에서 반환된 데이터 예시
    ()
})
