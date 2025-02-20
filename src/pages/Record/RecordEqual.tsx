import { useState, useEffect } from 'react'
import lunchSun from '@/assets/lunchSun.svg'
import DietBox from './Recordcomponents/DietDetailBox'
import { Link } from 'react-router'
import API from '@/apis/axiosInstance'
import Diet from '../Diet/Diet'

interface Food {
  foodName: string
  quantity: number
  grade: number
  gradePeopleNum: number
  carbos: number
  proteins: number
  fats: number
}

type Diet = Food[]

const RecordEqual = () => {
  const [dietBoxes, setDietBoxes] = useState<Diet>([
    {
      foodName: '햇반',
      quantity: 0,
      grade: 0,
      gradePeopleNum: 0,
      carbos: 0,
      proteins: 0,
      fats: 0,
    },
    {
      foodName: '고구마',
      quantity: 0,
      grade: 0,
      gradePeopleNum: 0,
      carbos: 0,
      proteins: 0,
      fats: 0,
    },
    {
      foodName: '김치',
      quantity: 0,
      grade: 3,
      gradePeopleNum: 4,
      carbos: 0,
      proteins: 0,
      fats: 0,
    },
  ])

  useEffect(() => {
    const gptFoods = localStorage.getItem('selectedFoods')
    const savedFoods: Food[] = []

    // localStorage에서 데이터 불러오기
    if (gptFoods) {
      const parsedFoods: Food[] = JSON.parse(gptFoods)
      savedFoods.push(...parsedFoods)
    }

    // sessionStorage에서 데이터 불러오기
    const sessionFoods = sessionStorage.getItem('selectedFoods')
    if (sessionFoods) {
      const parsedSessionFoods: Food[] = JSON.parse(sessionFoods)

      // sessionFoods 데이터를 기존 savedFoods에 합침 (중복을 방지)
      savedFoods.push(...parsedSessionFoods)
    }

    // 두 데이터를 합친 후 setDietBoxes로 상태 업데이트
    if (savedFoods.length > 0) {
      setDietBoxes(savedFoods)
    }
  }, [])

  const recordButton = () => {
    removeStorageItem()
    postMeal()
  }

  // DietBox 삭제 함수
  const removeDietBox = (foodName: string) => {
    setDietBoxes((prev) => prev.filter((diet) => diet.foodName !== foodName))
  }

  const removeStorageItem = () => {
    sessionStorage.removeItem('selectedFoods')
    localStorage.removeItem('selectedFoods')
  }
  const postMeal = async () => {
    const payload = {
      date: '2025-02-04',
      mealType: 'DINNER',
    }
    try {
      console.log(payload)
      await API.post('/api/records', payload)
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error)
    }
  }

  // 오늘 날짜 계산
  const today = new Date().toLocaleDateString('ko-KR', {
    month: '2-digit', // 두 자리 숫자 월
    day: '2-digit', // 두 자리 숫자 일
  })

  // 합산 값 계산 함수
  const calculateTotal = (type: 'carbos' | 'proteins' | 'fats') => {
    return dietBoxes.reduce((total, food) => total + food[type], 0)
  }

  // 칼로리 계산 (탄수화물 4, 단백질 4, 지방 9 kcal)
  const calculateCalories = () => {
    const totalCarbos = calculateTotal('carbos')
    const totalProteins = calculateTotal('proteins')
    const totalFats = calculateTotal('fats')

    return totalCarbos * 4 + totalProteins * 4 + totalFats * 9
  }

  const clickRecordMyself = () => {
    localStorage.setItem('selectFoods', JSON.stringify(dietBoxes))
    sessionStorage.removeItem('selectFoods')
  }

  return (
    <div className="flex justify-center items-center flex-col mt-[30px] h-svh ">
      <div className="flex justify-center items-center flex-col mt-[30px] w-[80%]">
        <img src={lunchSun} className="w-[126px] h-[126px]" />
        <h1 className="text-[40px] font-[GmarketSansWeight]">{today}</h1>
        <h1 className="text-[32px] font-[800]">점심</h1>
        <h1 className="text-[24px] font-[700] mb-[10px]">{calculateCalories()}kcal</h1>

        <div className="box-border flex flex-row w-[80%] justify-around mt-[11px] mb-[5px] text-[16px] font-[600] leading-[19.36px] gap-[6.5px]">
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">탄수화물</p>
            <p className="text-[14px] font-[500]">{calculateTotal('carbos')}g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">단백질</p>
            <p className="text-[14px] font-[500]">{calculateTotal('proteins')}g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">지방</p>
            <p className="text-[14px] font-[500]">{calculateTotal('fats')}g</p>
          </div>
        </div>

        <span className="box-border w-[90%] border-[1px] border-solid border-[#DFDFDFB2] shadow-base opacity-70 my-[6px] mb-[10px]" />

        <div className="min-h-[300px]">
          {/* DietBox 리스트 렌더링 */}
          {dietBoxes.map((diet) => (
            <DietBox
              key={diet.foodName}
              {...diet}
              onRemove={() => removeDietBox(diet.foodName)} // 삭제 함수 전달
            />
          ))}
        </div>

        <div className="flex flex-row gap-[7px] mb-[30px] justify-around w-full">
          <Link
            to="/record/myself"
            className="flex items-center justify-center py-4 bg-[#D1D1D1] rounded-base text-[14px] font-[500] w-1/2 h-[58px] border-[1px] border-solid border-[#EDEDED]"
            onClick={clickRecordMyself}
          >
            직접 입력하기
          </Link>
          <Link
            to="/home"
            className="flex items-center justify-center py-4 bg-[#D1D1D1] rounded-base text-[14px] font-[500] w-1/2 h-[58px] border-[1px] border-solid border-[#EDEDED]"
            onClick={recordButton}
          >
            기록하기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecordEqual
