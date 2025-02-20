import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import API from '../../apis/axiosInstance'
import { useQuestionResponse } from '@/hooks/useQuestionResponse'
import { mealData } from '@/apis/mealData'

interface FormData {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' })
  const navigate = useNavigate()
  const { data: questionResponseData, isLoading, isFetching } = useQuestionResponse()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await API.post('api/user/login', {
        email: formData.email,
        password: formData.password,
      })

      console.log('로그인 응답 데이터:', response.data)

      if (!response.data.data) {
        console.error('response.data.data가 없습니다!', response.data)
        alert('서버 응답 오류 발생. 다시 시도해주세요.')
        return
      }

      const { accessToken } = response.data.data
      console.log('받은 액세스 토큰:', accessToken)

      if (!accessToken) {
        console.error('로그인 응답에서 `accessToken`이 없습니다!', response.data.data)
        alert('서버에서 액세스 토큰을 반환하지 않습니다. 백엔드 API 확인 필요!')
        return
      }

      localStorage.setItem('access_token', accessToken)

      // ✅ userId 가져와서 저장
      await fetchAndStoreUserId()

      // ✅ 로그인 후 질문 데이터 백엔드로 전송
      await sendUserQuestionData()
      await sendUserMealData()

      if (isLoading || isFetching) {
        alert('로그인 성공! 질문 데이터를 불러오는 중입니다. 잠시만 기다려 주세요.')
        return
      }

      if (!questionResponseData) {
        alert('질문 데이터가 없습니다. 다시 시도해주세요.')
        return
      }

      const questionResponseDataLength = questionResponseData.data.length
      const randomNumUserMealDataIndex = Math.floor(Math.random() * questionResponseDataLength)
      // console.log('randomNumUserMealDataIndex:' + randomNumUserMealDataIndex)

      if (questionResponseData.isSuccess) {
        localStorage.setItem('mealPlanId', questionResponseData.data[randomNumUserMealDataIndex])
        navigate('/report', { state: { mealPlanId: questionResponseData.data[randomNumUserMealDataIndex] } })
      } else {
        alert('질문 페이지를 작성하지 않았습니다. 질문 페이지로 이동합니다.')
        localStorage.removeItem('access_token')
        navigate('/questionstart')
      }
    } catch (error: any) {
      console.error('로그인 실패:', error.response?.data || error)
      alert('로그인 실패: ' + (error.response?.data?.message || '서버 오류 발생'))
    }
  }

  // ✅ 로그인 후 userId 가져와서 저장
  const fetchAndStoreUserId = async () => {
    try {
      const token = localStorage.getItem('access_token')
      if (!token) {
        console.error('❌ 액세스 토큰이 없습니다. userId를 가져올 수 없습니다.')
        return
      }

      const response = await API.get('/api/user/test', {
        headers: {
          Authorization: `Bearer ${token}`, // ✅ 토큰을 헤더에 포함
        },
      })

      //console.log('🔹 현재 로그인한 유저 정보:', response.data);

      // ✅ `Hello, 9` 형태의 응답에서 숫자 부분만 추출
      const userId = response.data.match(/\d+/)?.[0]

      if (!userId) {
        console.error('❌ userId를 찾을 수 없습니다.', response.data)
        return
      }

      //console.log(`✅ 저장된 userId: ${userId}`);
      localStorage.setItem('userId', userId) // ✅ userId 저장
    } catch (error) {
      console.error('❌ userId 가져오기 실패:', error)
    }
  }

  const sendUserMealData = async () => {
    try {
      const randomNum = Math.floor(Math.random() * 6)
      // console.log(randomNum)

      const data = mealData[randomNum]

      const response = await API.post('/api/mealPlan/', data)
      console.log('식단 데이터 전송 성공:', response.data)
    } catch (error) {
      console.error('❌ 식단 데이터 전송 실패:', error)
    }
  }
  // ✅ 로그인 후 질문 데이터 전송
  const sendUserQuestionData = async () => {
    try {
      const data = {
        nickname: localStorage.getItem('nickname') || '',
        height: Number(localStorage.getItem('height')) || 0,
        weight: Number(localStorage.getItem('weight')) || 0,
        goalWeight: Number(localStorage.getItem('goal_weight')) || 0,
        activityLevel: localStorage.getItem('activity_level') || '',
        mealNumber: localStorage.getItem('meal_number') || '',
        cookTime: localStorage.getItem('cook_time') || '',
        deliveryNum: localStorage.getItem('delivery_num') || '',
        mealTime: localStorage.getItem('meal_time') || '',
        eatingOut: localStorage.getItem('eating_out') || '',
        favoriteFood: localStorage.getItem('favorite_food') || '',
      }

      const response = await API.patch('/api/user/question', data)
      console.log('질문 데이터 업데이트 성공:', response.data)
    } catch (error) {
      console.error('❌ 질문 데이터 업데이트 실패:', error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 font-[Pretendard]">
      <div className="w-full max-w-[85%] p-6 bg-white rounded-xl shadow-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">로그인</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-[3px]">이메일</label>
            <input
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm font-medium text-gray-600 mb-[3px]">비밀번호</label>
            <input
              type="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          <button type="submit" className="w-full p-3 bg-[#DAE6CB] text-white rounded-lg hover:bg-[#ACB99C] transition">
            로그인
          </button>
        </form>

        <div className="mt-4 text-gray-500 text-sm mb-[5px]">또는</div>

        <Link to="/questionstart" className="text-green-600 hover:text-green-500 transition">
          회원가입 하러가기
        </Link>
      </div>
    </div>
  )
}

export default LoginForm
