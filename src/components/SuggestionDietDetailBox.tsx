import star from '@/assets/star.svg'
import human from '@/assets/human.svg'
import minus from '@/assets/minusButton.svg'

interface Props {
  name: string
  unit: string
  carbon: number
  fat: number
  protien: number
  starCount: number
  humanCount: number
  onRemove: () => void
  children: React.ReactNode
  height?: string
}

const DietBox = ({
  children,
  name,
  unit,
  carbon,
  fat,
  protien,
  starCount,
  humanCount,
  onRemove,
  height = 'h-[99px]',
}: Props) => {
  return (
    <div
      className={`box-border flex flex-col justify-center w-[327px] ${height} bg-white rounded-base shadow-base border-[1px] border-solid border-[#EDEDED] px-[18px] mb-[24px] `}
    >
      <div className="flex flex-row items-center">
        <h1 className="w-fit text-[16px] font-[700] me-[10px] ">
          {name}({unit})
        </h1>
        <img src={human} />
        <p className="text-[14px] font-[500] me-[7px]">{starCount}</p>
        <img src={star} />
        <p className="text-[14px] font-[500]">{humanCount}</p>
        <img
          src={minus}
          className="ml-auto w-[24px] h-[24px]"
          onClick={onRemove} // 클릭 시 삭제 함수 호출
        />
      </div>
      <div className="box-border flex flex-row w-full mt-[11px] text-[14px] font-[500] leading-[19.36px] gap-[6.5px] text-[#8B8B8B]">
        <p>탄수화물 {carbon}g</p>
        <p>단백질 {protien}g</p>
        <p>지방 {fat}g</p>
      </div>
      {children}
    </div>
  )
}

export default DietBox
