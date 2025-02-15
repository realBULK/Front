// src/mocks/handlers.js
import { menu, menuChange, menuDetail } from '@/mocks/apis/menu'
import { home } from '@/mocks/apis/home'
import { groupEmoji, groupEmojiDelete, groupEmojiPatch, groupLank, groupList, groupMap } from '@/mocks/apis/group'
import { userData, userDuplicate, userReport, userReportPatch } from '@/mocks/apis/question'
import { recordData } from '@/mocks/apis/record'
import { popularity } from './apis/search'

import { delay, http } from 'msw'

export const handlers = [
  http.all('*', async () => {
    await delay(100)
  }),
  menu,
  menuChange,
  menuDetail,
  home,
  groupEmoji,
  groupEmojiDelete,
  groupEmojiPatch,
  groupLank,
  groupList,
  groupMap,
  userData,
  userDuplicate,
  userReport,
  userReportPatch,
  recordData,
  popularity,
]
