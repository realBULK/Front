interface Props {
  name: string
  unit: string
  carbon: number
  fat: number
  protien: number
}

const DietBox = ({ name, unit, carbon, fat, protien }: Props) => {
  return (
    <div className="box-border flex flex-col items-center w-[100%] h-[142px] bg-white rounded-base shadow-base border-[1px] border-solid border-[#EDEDED] px-[18px] mb-[25px] ">
      <h1 className="w-fit text-[24px] font-[700]  ">
        {name}({unit})
      </h1>
      <div className="box-border flex flex-row w-full justify-around mt-[11px] text-[16px] font-[600] leading-[19.36px] gap-[6.5px]">
        <div className="flex flex-col items-center">
          <p>탄수화물</p>
          <br />
          <p className="text-[14px] font-[400]">{carbon}g</p>
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
