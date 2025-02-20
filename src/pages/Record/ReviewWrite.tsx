import { useState } from 'react'
import backButton from '../../assets/backButton.svg'
import Rating from './RecordComponents/Rating'
import BigGrayButton from '@/components/BigGrayButton'
import { useParams } from 'react-router'
import API from '@/apis/axiosInstance'

const ReviewWrite = () => {
  const { name } = useParams()
  const { id } = useParams()

  const goBack = () => {
    window.history.back() // 뒤로 가기
  }

  const [rate, setRate] = useState<number>(0)

  const [text, setText] = useState('')
  const maxLength = 300

  const payload = {
    rate: rate,
    content: text,
  }
  const postReview = async () => {
    try {
      await API.post(`/api/reviews/${id}`, payload)
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error)
    }
  }

  return (
    <div className="flex flex-col h-screen pt-[28px] px-[20px]">
      <div className="flex flex-row items-center justify-between mb-[29px]">
        <img src={backButton} className="w-[24px] h-[17.485px] me-[27px]" onClick={goBack} />
        <div className="w-[60%] flex items-center text-[24px] font-[700] text-[#F5F5F5]">후기</div>
      </div>
      <p className="text-[32px] font-[800] ms-[19px] mb-[16px]">{name}</p>
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
        className="h-[413px] w-full bg-white rounded-[15px] shadow-whiteBox text-top ps-[22px] pt-[30px] mb-[3px] text-[14px]  pr-[50px]"
        placeholder="다른 사용자를 위해 의견을 적어주세요 (선택)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-between ">
        {/* 글자 수 표시 */}
        <div></div>
        <span
          className={`float-end text-[14px] mb-[16px] me-[3px] ${text.length > maxLength ? 'text-red-500' : 'text-gray-500'}`}
        >
          {text.length}/{maxLength}
        </span>
      </div>

      {/* 버튼 */}
      <BigGrayButton
        text="후기 등록하기"
        navigateTo="record/myself"
        onClick={() => postReview()}
        disabled={text.length > maxLength} // 글자 수 초과 시 비활성화
        isPink={text.length > maxLength}
      />
    </div>
  )
}

export default ReviewWrite
