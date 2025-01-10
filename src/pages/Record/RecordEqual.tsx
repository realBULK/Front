import lunchSun from '../../assets/lunchSun.svg'
import DietBox from './recordcomponet'

const RecordEqual = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[30px] ">
      <img src={lunchSun} className="w-[126px] h-[126px] " />
      <h1 className="text-[40px] font-[GmarketSansWeight] mb-[] ">12.21</h1>
      <h1 className="text-[32px] font-[800] mb-[25px]">점심</h1>
      <DietBox name="현미밥" unit="200g" carbon={100} protien={7} fat={10} />
      <DietBox name="닭가슴살" unit="100g" carbon={3} protien={17} fat={5} />
      <DietBox name="계란후라이" unit="1개" carbon={10} protien={6} fat={6} />
      <DietBox name="채소 볶음" unit="브로콜리, 당근" carbon={10} protien={3} fat={3} />

      <div className="flex flex-row gap-[7px]">
        <button className="flex items-center justify-center py-4 bg-white rounded-base shadow-base text-[24px] font-[600] h-[80px] border-[1px] border-solid border-[#EDEDED]">
          직접 입력하기
        </button>
        <button className="flex items-center justify-center py-4 bg-white rounded-base shadow-base text-[24px] font-[600] h-[80px] border-[1px] border-solid border-[#EDEDED]">
          기록하기
        </button>
        <button className="flex items-center justify-center py-4 bg-white rounded-base shadow-base text-[24px] font-[600] h-[80px] border-[1px] border-solid border-[#EDEDED]">
          하트
        </button>
      </div>
    </div>
  )
}

export default RecordEqual
