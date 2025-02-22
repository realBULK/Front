interface DietBoxProps {
  foodName: string
  quantity: string
  carbos: number
  fat: number
  protien: number
}

const DietBox = ({ foodName, quantity, carbos, fat, protien }: DietBoxProps) => {
  return (
    <div className="box-border flex flex-col items-center w-[83%] h-[142px] bg-white rounded-base shadow-base border-[1px] border-solid border-[#EDEDED] px-[18px] mb-[25px] ">
      <h1 className="w-fit text-[24px] font-[700]  ">
        {foodName}({quantity})
      </h1>
      <span className="box-border w-[100%] border-[1px] border-solid border-[#DFDFDFB2] shadow-base opacity-70 my-[6px] " />
      <div className="box-border flex flex-row w-full justify-around mt-[11px] text-[16px] font-[600] leading-[19.36px] gap-[6.5px]">
        <div className="flex flex-col items-center">
          <p>탄수화물</p>
          <br />
          <p className="text-[14px] font-[400]">{carbos}g</p>
        </div>
        <div className="flex flex-col items-center">
          <p>단백질</p>
          <br />
          <p className="text-[14px] font-[400]">{protien}g</p>
        </div>
        <div className="flex flex-col items-center">
          <p>지방</p>
          <br />
          <p className="text-[14px] font-[400]">{fat}g</p>
        </div>
      </div>
      <p></p>
    </div>
  )
}

export default DietBox
