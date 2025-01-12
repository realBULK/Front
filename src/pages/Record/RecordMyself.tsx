import backButton from '../../assets/backButton.svg'
import grayCircle from '../../assets/grayCircle.svg'
import searchIcon from '../../assets/searchIcon.svg'
import CustomFoodBox from './Recordcomponents/CustomFoodBox'

const RecordMyself = () => {
  return (
    <div className="flex flex-col h-screen pt-[28px] px-[28px]">
      <div className="flex flex-row items-center justify-between mb-[37px]">
        <img src={backButton} className="w-[24px] h-[17.485px] " />
        <div className="w-[70%] h-[37px] rounded-[50px] bg-[#dfdfdf] shadow-base opacity-80 flex items-center ">
          <img src={searchIcon} className="ms-[15px]" />
        </div>
        <div className="relative w-[40px] h-[40px] flex items-center justify-center">
          <img src={grayCircle} className="absolute w-[45px] h-[45px] " />
          <p className="absolute text-[14px] font-[900]">0</p>
        </div>
      </div>
      <CustomFoodBox name="오트밀" unit="1인분 50g" />
      <CustomFoodBox name="삶은 고구마" unit="1인분 150g" />
      <CustomFoodBox name="현미밥" unit="1인분 200g" />
      <CustomFoodBox name="닭가슴살" unit="1인분 100g" />
    </div>
  )
}

export default RecordMyself
