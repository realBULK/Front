import plusIcon from '../../../assets/plusIcon.svg'
import star1 from '../../../assets/star1.svg'
import star2 from '../../../assets/star2.svg'
import star3 from '../../../assets/star3.svg'
import star4 from '../../../assets/star4.svg'
import star5 from '../../../assets/star5.svg'

import human from '../../../assets/human.svg'

interface Props {
  name: string
  unit: string
  grade: number
  gradePeopleNum: number
  openModal: () => void
}

const CustomFoodBox = ({ name, unit, grade, gradePeopleNum, openModal }: Props) => {
  return (
    <div className="flex justify-between py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[112px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[12px]">
      <div className="flex flex-col justify-center h-100% ms-[31px] gap-[4px]">
        <p className="text-[14px] font-[GmarketSansMedium]  ">{name}</p>
        <p className="text-[14px] font-[GmarketSanLight] text-[#191919] ">{unit}</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <img src={plusIcon} className="h-[15px] w-[15px] mt-[5px] me-[35px]" onClick={openModal} />
        <div className="flex flex-row items-center mt-10 me-5">
          {(() => {
            if (grade == 1) {
              return <img src={star1} />
            } else if (grade == 2) {
              return <img src={star2} />
            } else if (grade == 3) {
              return <img src={star3} />
            } else if (grade == 4) {
              return <img src={star4} />
            } else if (grade == 5) {
              return <img src={star5} />
            } else {
              return <p>기본 값</p>
            }
          })()}
          <img src={human} className="w-[16px] h-[16px] " />
          <p className="ms-1 text-[14px]">{gradePeopleNum}</p>
        </div>
      </div>
    </div>
  )
}

export default CustomFoodBox
