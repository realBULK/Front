import { useState } from 'react'
import backButton from '../../assets/backButton.svg'
import Rating from './Recordcomponents/Rating'

const ReviewWrite = () => {
  const goBack = () => {
    window.history.back() // 뒤로 가기
  }

  const [rate, setRate] = useState<number>(0)

  return (
    <div className="flex flex-col h-screen pt-[28px] px-[20px]">
      <div className="flex flex-row items-center justify-between mb-[29px]">
        <img src={backButton} className="w-[24px] h-[17.485px] me-[27px]" onClick={goBack} />
        <div className="w-[60%] flex items-center text-[24px] font-[700] text-[#F5F5F5]">후기</div>
      </div>
      <p className="text-[32px] font-[800] ms-[19px] mb-[16px]">삶은 고구마</p>
      <p className="text-[16px] font-[500] ms-[19px] mb-[39px]">이 음식에 대한 솔직한 평가를 공유해주세요</p>

      <div className="relative w-full h-[100px] ms-[19px]">
        <div className="absolute">
          <Rating rating={rate} width={61} height={61} />
        </div>
        <div className="absolute w-[305px] h-full ">
          <div className="absolute w-[20%] h-full" onClick={() => setRate(1)}></div>
          <div className="absolute left-[20%] w-[20%] h-full" onClick={() => setRate(2)}></div>
          <div className="absolute left-[40%] w-[20%] h-full" onClick={() => setRate(3)}></div>
          <div className="absolute left-[60%] w-[20%] h-full" onClick={() => setRate(4)}></div>
          <div className="absolute left-[80%] w-[20%] h-full" onClick={() => setRate(5)}></div>
        </div>
      </div>
      <textarea
        className="h-[413px] bg-white rounded-[15px] shadow-whiteBox text-top ps-[22px] pt-[30px] text-[14px]"
        placeholder="다른 사용자를 위해 의견을 적어주세요 (선택)"
      ></textarea>
    </div>
  )
}

export default ReviewWrite
