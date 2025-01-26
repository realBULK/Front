import backButton from '../../assets/backButton.svg'
import review from '../../assets/review.svg'
import quotes from '../../assets/quotes.svg'
import human from '../../assets/humanYellow.svg'
import Rating from './Recordcomponents/Rating'
import ReviewBox from './Recordcomponents/ReviewBox'
import { useState } from 'react'
import { Link } from 'react-router'

interface Review {
  id: number
  count: number
  title: string
  userId: string
  date: string
  content: string
}

const RecordReview = () => {
  const [reviewBox, setReviewBox] = useState<Review[]>([
    {
      id: 1,
      count: 4,
      title: '대체로 만족스러웠어요 다시 먹고 싶어요',
      userId: 'orum1223',
      date: '2025.01.02',
      content: '간단한게 한끼 식사에 포함 하기 너무 좋아요!',
    },
    {
      id: 2,
      count: 3,
      title: '대체로 만족스러웠어요 다시 먹고 싶어요',
      userId: 'orum1223',
      date: '2025.01.02',
      content: '간단한게 한끼 식사에 포함 하기 너무 좋아요!',
    },
    {
      id: 3,
      count: 5,
      title: '대체로 만족스러웠어요 다시 먹고 싶어요',
      userId: 'orum1223',
      date: '2025.01.02',
      content: '간단한게 한끼 식사에 포함 하기 너무 좋아요!',
    },
  ])

  const goBack = () => {
    window.history.back() // 뒤로 가기
  }

  return (
    <div className="flex flex-col h-screen pt-[28px] px-[20px]">
      <div className="flex flex-row items-center justify-between mb-[37px]">
        <img src={backButton} className="w-[24px] h-[17.485px] me-[27px]" onClick={goBack} />
        <div className="w-[60%] flex items-center text-[24px] font-[700] ">삶은 고구마</div>
        <div className="flex flex-row items-center">
          <div className="relative  w-[20px] h-[18px] ">
            <img src={review} className=" absolute w-[20px] h-[18px] " />
            <img src={quotes} className=" absolute left-1.5 top-1" />
          </div>
          <Link to="/record/review/write" className="ms-1 text-[15px] font-[500] underline underline-offset-4">
            후기 쓰기
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[112px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[41px]">
        <img src={human} />
        <p className="text-[16px] font-[500] ms-[5px] me-[7px]">2</p>
        <Rating rating={3} width={49} height={49} />
      </div>
      <h1 className="text-[24px] font-[700] mb-[10px]">실제 증량러들의 생생한 한줄평!</h1>
      {reviewBox.map((box) => (
        <ReviewBox key={box.id} {...box} />
      ))}
    </div>
  )
}

export default RecordReview
