import musleArm from '../../../assets/musleArm.svg'

interface Props {
  id: number
  count: number
  title: string
  userId: string
  date: string
  content: string
}

const ReviewBox = ({ count, title, userId, date, content }: Props) => {
  return (
    <div className="flex justify-center items-center py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[112px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[15px]">
      <div className="relative w-[41px] h-[41px] me-[17px]">
        <img src={musleArm} className="absolute" />
        <p className="absolute left-7 bottom-5 text-[16px] font-[500]">{count}</p>
      </div>
      <div>
        <p className="text-[16px] font-[600] ">{title}</p>
        <div className="flex flex-row text-[10px] font-[300] text-[#858585]">
          <p className="">{userId} · </p>
          <p className="">{date}</p>
        </div>

        <p className="text-[14px] font-[500]">{content}</p>
      </div>
    </div>
  )
}

export default ReviewBox
