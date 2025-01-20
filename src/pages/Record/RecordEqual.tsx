import lunchSun from '../../assets/lunchSun.svg'
import DietBox from './Recordcomponents/dietDetailBox'

const RecordEqual = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-[30px] ">
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

        <DietBox name="현미밥" unit="200g" carbon={100} protien={7} fat={10} />
        <DietBox name="닭가슴살" unit="100g" carbon={3} protien={17} fat={5} />
        <DietBox name="계란후라이" unit="1개" carbon={10} protien={6} fat={6} />
        <DietBox name="채소 볶음" unit="브로콜리, 당근" carbon={10} protien={3} fat={3} />

        <div className="flex flex-row gap-[7px] mb-[30px]">
          <button className="flex items-center justify-center py-4 bg-[#CEDAFF] hover:bg-[#B2BBFF] rounded-base shadow-blueBox text-[16px] font-[600] w-[135px] h-[58px] border-[1px] border-solid border-[#EDEDED]">
            직접 입력하기
          </button>
          <button className="flex items-center justify-center py-4 bg-[#CEDAFF] hover:bg-[#B2BBFF] rounded-base shadow-blueBox text-[16px] font-[600] w-[104px] h-[58px] border-[1px] border-solid border-[#EDEDED]">
            기록하기
          </button>
          <button className="flex items-center justify-center py-4 bg-[#CEDAFF] hover:bg-[#B2BBFF] rounded-base shadow-blueBox text-[16px] font-[600] w-[60px] h-[58px] border-[1px] border-solid border-[#EDEDED]">
            하트
          </button>
        </div>
      </div>
    </div>
  )
}

export default RecordEqual
