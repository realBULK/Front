import plusIcon from '../../../assets/plusIcon.svg'

interface Props {
  name: string
  unit: string
}

const CustomFoodBox = ({ name, unit }: Props) => {
  return (
    <div className="flex justify-between py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[112px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[12px]">
      <div className="flex flex-col justify-center h-100% ms-[31px] gap-[4px]">
        <p className="text-[14px] font-[GmarketSansMedium]  ">{name}</p>
        <p className="text-[14px] font-[GmarketSanLight] text-[#191919] ">{unit}</p>
      </div>
      <img src={plusIcon} className="h-[40px] w-[40px] me-[18px]" />
    </div>
  )
}

export default CustomFoodBox
