// src/mocks/handlers.js
import { menu } from '@/mocks/apis/menu'
import { delay, http } from 'msw'

export const handlers = [
  http.all('*', async () => {
    await delay(100)
  }),
  menu, // 추가된 핸들러
]
