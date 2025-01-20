import axios from 'axios'
import { useLocation } from 'react-router'
import { useEffect } from 'react'

const ResultPost = () => {
  const location = useLocation()

  // `state`에서 데이터 추출 (안전한 접근 방법)
  const questionText = location.state?.questionText || '기본값'
  const nextPage = location.state?.nextPage || ''

  // 유저 데이터 객체 정의
  const userData = {
    userId: '',
    height: 160,
    weight: 45,
    goal_weight: 49,
    activity_level: '', // 이후 업데이트
    meal_number: '2끼',
    nickname: '조우즈',
    cook_time: '30분 이상',
    delivery_num: '가끔',
    meal_time: '매우 규칙적',
    eating_out: '가끔 있음',
    favorite_food: '감귤류, 양파, 버섯, 메밀, 소고기, 돼지고기',
  }

  // 특정 페이지 확인 후 데이터 설정
  if (nextPage === '1_2') {
    userData.activity_level = questionText
  }

  // 서버로 데이터 전송 함수
  const sendUserData = async () => {
    try {
      const response = await axios.post('https://your-api-endpoint.com/user-data', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      console.log('서버 응답:', response.data)
    } catch (error) {
      console.error('데이터 전송 실패:', error)
    }
  }

  // 페이지 로드 시 자동 전송
  useEffect(() => {
    sendUserData()
  }, []) // 컴포넌트가 마운트될 때 실행

  return (
    <div>
      <h1>데이터 전송 중...</h1>
      <p>전송된 활동 수준: {userData.activity_level}</p>
    </div>
  )
}

export default ResultPost
