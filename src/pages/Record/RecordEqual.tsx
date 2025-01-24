import { useState } from 'react'
import lunchSun from '../../assets/lunchSun.svg'
import DietBox from './Recordcomponents/dietDetailBox'
import { Link } from 'react-router'

interface Diet {
  id: number // 고유 ID
  name: string
  unit: string
  carbon: number
  fat: number
  protien: number
  starCount: number
  humanCount: number
}

const RecordEqual = () => {
  const [dietBoxes, setDietBoxes] = useState<Diet[]>([
    { id: 1, name: '현미밥', unit: '200g', carbon: 100, fat: 10, protien: 7, starCount: 3, humanCount: 5 },
    { id: 2, name: '닭가슴살', unit: '100g', carbon: 3, fat: 5, protien: 17, starCount: 4, humanCount: 7 },
    { id: 3, name: '계란후라이', unit: '1개', carbon: 10, fat: 6, protien: 6, starCount: 6, humanCount: 4 },
    { id: 4, name: '채소 볶음', unit: '브로콜리, 당근', carbon: 10, fat: 3, protien: 3, starCount: 2, humanCount: 9 },
  ])

  // DietBox 삭제
  const removeDietBox = (id: number) => {
    setDietBoxes((prev) => prev.filter((diet) => diet.id !== id))
  }

  // 새로운 DietBox 추가
  //   const addDietBox = () => {
  //     const newDiet: Diet = {
  //       id: Date.now(), // 고유 ID 생성
  //       name: '새 음식',
  //       unit: '1개',
  //       carbon: 20,
  //       fat: 5,
  //       protien: 10,
  //       starCount: 0,
  //       humanCount: 0,
  //     }
  //     setDietBoxes((prev) => [...prev, newDiet])
  //   }
  return (
    <div className="flex justify-center items-center flex-col mt-[30px] h-full">
      <div className="flex justify-center items-center flex-col mt-[30px] w-[80%]">
        <img src={lunchSun} className="w-[126px] h-[126px] " />
        <h1 className="text-[40px] font-[GmarketSansWeight] mb-[] ">12.21</h1>
        <h1 className="text-[32px] font-[800] mb-[]">점심</h1>
        <h1 className="text-[24px] font-[700] mb-[10px]">705kcal</h1>
        <div className="box-border flex flex-row w-[80%] justify-around mt-[11px] mb-[5px] text-[16px] font-[600] leading-[19.36px] gap-[6.5px]">
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">탄수화물</p>
            <p className="text-[14px] font-[500]">100g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">단백질</p>
            <p className="text-[14px] font-[500]">30g</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[14px] font-[600] mb-[10px]">지방</p>
            <p className="text-[14px] font-[500]">18g</p>
          </div>
        </div>
        <span className="box-border w-[90%] border-[1px] border-solid border-[#DFDFDFB2] shadow-base opacity-70 my-[6px] mb-[10px]" />

        {/* DietBox 리스트 렌더링 */}
        {dietBoxes.map((diet) => (
          <DietBox
            key={diet.id}
            {...diet}
            onRemove={() => removeDietBox(diet.id)} // 삭제 함수 전달
          />
        ))}

        <div className="flex flex-row gap-[7px] mb-[30px] justify-around w-full">
          <Link
            to="/record/myself"
            className="flex items-center justify-center py-4 bg-[#D1D1D1] rounded-base text-[14px] font-[500] w-1/2 h-[58px] border-[1px] border-solid border-[#EDEDED]"
          >
            직접 입력하기
          </Link>
          <Link
            to="/home"
            className="flex items-center justify-center py-4 bg-[#D1D1D1] rounded-base text-[14px] font-[500] w-1/2  h-[58px] border-[1px] border-solid border-[#EDEDED]"
          >
            기록하기
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecordEqual
