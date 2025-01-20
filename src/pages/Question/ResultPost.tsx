//현재 사용 안하는 코드
//데이터 서버 전송을 시도해봄...

import axios from 'axios'
import { useLocation } from 'react-router'
import { useEffect } from 'react'

const ResultPost = () => {
  const location = useLocation()
  const questionText = location.state?.text || '기본값'
  const nextPage = location.state?.navigateTo || ''
  //   console.log(questionText)
  //   console.log(nextPage)
  console.log(location.state)
  const updatedUserData = {
    userId: '',
    height: 160,
    weight: 45,
    goal_weight: 49,
    activity_level: '',
    meal_number: '',
    nickname: '조우즈',
    cook_time: '',
    delivery_num: '',
    meal_time: '',
    eating_out: '',
    favorite_food: '감귤류, 양파, 버섯, 메밀, 소고기, 돼지고기',
    ...(nextPage === '1_2' && { activity_level: questionText }),
    ...(nextPage === '1_3' && { meal_number: questionText }),
    ...(nextPage === '2_1' && { cook_time: questionText }),
    ...(nextPage === '2_2' && { delivery_num: questionText }),
    ...(nextPage === '3_1' && { meal_time: questionText }),
    ...(nextPage === '/question/signup' && { eating_out: questionText }),
    ...(nextPage === '4_1' && { favorite_food: questionText }),
    ...(nextPage === '4_2' && { nickname: questionText }),
  }

  const sendUserData = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/user-data', updatedUserData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('서버 응답:', response.data)
    } catch (error: any) {
      console.error('데이터 전송 실패:', error.response?.data || error.message)
    }
  }

  useEffect(() => {
    if (nextPage && questionText) {
      sendUserData()
    }
  }, [nextPage, questionText])

  return (
    <div>
      <h1>데이터 전송 중...</h1>
      <p>전송된 값: {JSON.stringify(updatedUserData, null, 2)}</p>
    </div>
  )
}

export default ResultPost
