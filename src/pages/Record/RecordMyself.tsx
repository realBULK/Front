import { useState } from 'react'
import backButton from '../../assets/backButton.svg'
import grayCircle from '../../assets/pinkCircle.svg'
import searchIcon from '../../assets/searchIcon.svg'
import review from '../../assets/review.svg'
import quotes from '../../assets/quotes.svg'
import plus from '../../assets/plusIcon.svg'
import minus from '../../assets/minusIcon.svg'

import CustomFoodBox from './Recordcomponents/CustomFoodBox'
import { Link } from 'react-router'

interface Diet {
  id: number // 고유 ID
  name: string
  unit: string
  starCount: number
  humanCount: number
}

interface ModalInfo {
  name: string
  unit: number
  carbon: number
  fat: number
  protien: number
  kcal: number
}

const RecordMyself = () => {
  const [customFoodBoxes] = useState<Diet[]>([
    { id: 1, name: '현미밥', unit: '200g', starCount: 3, humanCount: 5 },
    { id: 2, name: '닭가슴살', unit: '100g', starCount: 4, humanCount: 7 },
    { id: 3, name: '계란후라이', unit: '1개', starCount: 5, humanCount: 4 },
    { id: 4, name: '채소 볶음', unit: '브로콜리, 당근', starCount: 2, humanCount: 9 },
  ])
  const [modalInfo] = useState<ModalInfo>({
    name: '삶은 고구마',
    unit: 100,
    carbon: 45.85,
    protien: 2.6,
    fat: 0.22,
    kcal: 128,
  })
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }
  const closeModal = () => {
    setIsOpen(false)
  }
  //   const addDietBox = () => {
  //     const newDiet: Diet = {
  //       id: Date.now(), // 고유 ID 생성
  //       name: '새 음식',
  //       unit: '1개',
  //       starCount: 0,
  //       humanCount: 0,
  //     }
  //     setCustomFoodBoxes((prev) => [...prev, newDiet])
  //   }

  const [unitCount, setUnitCount] = useState<number>(1)

  const countPlus = () => {
    setUnitCount(unitCount + 1)
  }
  const countMinus = () => {
    setUnitCount(unitCount - 1)
  }

  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsActive(!isActive)
  }

  const goBack = () => {
    window.history.back() // 뒤로 가기
  }

  return (
    <div className="flex flex-col h-screen pt-[28px] px-[20px]">
      <div className="flex flex-row items-center justify-between mb-[37px]">
        <img src={backButton} className="w-[24px] h-[17.485px]" onClick={goBack} />
        <div className="w-[70%] h-[37px] rounded-[50px] bg-[#dfdfdf] opacity-80 flex items-center ">
          <img src={searchIcon} className="ms-[15px]" />
        </div>
        <div className="relative w-[40px] h-[40px] flex items-center justify-center">
          <img src={grayCircle} className="absolute w-[45px] h-[45px] " />
          <p className="absolute text-[14px] font-[900]">0</p>
        </div>
      </div>
      {/* DietBox 리스트 렌더링 */}
      {customFoodBoxes.map((diet) => (
        <CustomFoodBox key={diet.id} {...diet} openMdoal={() => openModal()} />
      ))}

      {isOpen && (
        <>
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-30"
            onClick={closeModal} // 배경 클릭 시 모달 닫기
          />
          <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-[#F5F5F5] w-[393px] h-[429px] rounded-t-[30px] px-[20px]">
            <div className="flex justify-between items-baseline mt-[31px] ms-[15px] me-[10px] mb-[18px]">
              <h1 className="text-[24px] font-[700]">{modalInfo.name}</h1>
              <div className="flex felx-row items-center">
                <div className="relative  w-[20px] h-[18px] ">
                  <img src={review} className=" absolute w-[20px] h-[18px] " />
                  <img src={quotes} className=" absolute left-1.5 top-1" />
                </div>
                <Link to="/record/review" className="ms-1.5 text-[14px] font-[500]">
                  후기보러가기
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-around px-[40px] py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[138px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[27px]">
              <div className="flex justify-between w-full mt-2">
                <div className="flex flex-row items-center">
                  <span className="flex justify-center items-center w-[26px] h-[26px] bg-[#DAE6CB] rounded-full text-[16px] font-[700]">
                    탄
                  </span>{' '}
                  <p className="text-[16px] font-[700] ms-[12px]">{modalInfo.carbon}</p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="flex justify-center items-center w-[26px] h-[26px] bg-[#DED1E8] rounded-full text-[16px] font-[700]">
                    단
                  </span>{' '}
                  <p className="text-[16px] font-[700] ms-[12px]">{modalInfo.protien}</p>
                </div>
                <div className="flex flex-row items-center">
                  <span className="flex justify-center items-center w-[26px] h-[26px] bg-[#D2E4E2] rounded-full text-[16px] font-[700]">
                    지
                  </span>{' '}
                  <p className="text-[16px] font-[700] ms-[12px]">{modalInfo.fat}</p>
                </div>
              </div>
              <div className="flex justify-center items-baseline">
                <p className="text-[24px] font-[700] ">{modalInfo.kcal}kcal</p>
                <p className="text-[20px] font-[700] text-[#A7A2A1] ">/100g</p>
              </div>
            </div>
            <div className="flex flex-row justify-between mb-[26px]">
              <div className="flex flex-row justify-between items-center px-[22px] py-4 bg-[#ffffff] rounded-base shadow-whiteBox w-[60%] h-[80px] border-[1px] border-solid border-[#EDEDED] opacity-80">
                <img src={minus} className="w-[15px] h-[15px]" onClick={countMinus} />
                <p className="text-[16px] font-[500]">{unitCount}</p>
                <img src={plus} className="w-[15px] h-[15px]" onClick={countPlus} />
              </div>
              <div className="flex flex-col w-[29%] justify-between ">
                <button
                  className={`flex flex-row justify-center items-center py-4 rounded-[15px] shadow-whiteBox h-[37px] border-[1px] border-solid border-[#EDEDED] opacity-80 ${isActive ? 'bg-[#ffffff]' : 'bg-[#f2e1da] opacity-80'}`}
                  onClick={handleActive}
                >
                  <p className="text-[16px] font-[500]">인분({modalInfo.unit}g)</p>
                </button>
                <button
                  className={`flex flex-row justify-center items-center px-[22px] py-4  rounded-[15px] shadow-whiteBox h-[37px] border-[1px] border-solid border-[#EDEDED] opacity-80 ${!isActive ? 'bg-[#ffffff]' : 'bg-[#f2e1da] opacity-80'}`}
                  onClick={handleActive}
                >
                  <p className="text-[16px] font-[500]">g</p>
                </button>
              </div>
            </div>
            <button className="w-full h-[57px] bg-[#D1D1D1] rounded-[15px] shadow-whiteBox text-[14px] font-[500]">
              추가하기
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default RecordMyself
