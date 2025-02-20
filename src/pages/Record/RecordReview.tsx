import backButton from '../../assets/backButton.svg'
import review from '../../assets/review.svg'
import quotes from '../../assets/quotes.svg'
import human from '../../assets/humanYellow.svg'
import Rating from './RecordComponents/Rating'
import ReviewBox from './RecordComponents/ReviewBox'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import API from '@/apis/axiosInstance'

interface Reviews {
  id: number
  rate: number
  title: string
  userEmail: string
  createdAt: string
  content: string
}

interface Response {
  name: string
  averageRate: number
  reviewCount: number
  reviews: Reviews[]
}

const RecordReview = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    const fetchDietData = async () => {
      try {
        const response = await API.get(`/api/reviews/${id}`)

        console.log(response.data.data)

        setReviewData(response.data.data)
      } catch (error) {
        console.error('식단 데이터를 불러오는 중 오류 발생:', error)
      }
    }
    fetchDietData()
  }, [])

  const [reviewData, setReviewData] = useState<Response>({
    name: 'test',
    averageRate: 3,
    reviewCount: 1,
    reviews: [
      {
        id: 1,
        rate: 3,
        title: '효과는 있었지만, 기대에 조금 못 미쳤어요.',
        userEmail: 'eunseo120@kakao.com',
        createdAt: '2025.02.08',
        content: 'um....',
      },
      {
        id: 2,
        rate: 5,
        title: '이 식품 덕분에 증량이 쉬워졌어요!',
        userEmail: 'asdf@kakao.com',
        createdAt: '2025.02.09',
        content: 'good',
      },
    ],
  })

  const goBack = () => {
    window.history.back() // 뒤로 가기
  }

  const goReviewWrite = () => {
    navigate(`/record/review/write/${id}/${reviewData.name}`)
  }

  return (
    <div className="flex flex-col h-screen pt-[28px] px-[20px]">
      <div className="flex flex-row items-center justify-between mb-[37px]">
        <img src={backButton} className="w-[24px] h-[17.485px] me-[27px]" onClick={goBack} />
        <div className="w-[60%] flex items-center text-[24px] font-[700] ">{reviewData.name}</div>
        <div className="flex flex-row items-center">
          <div className="relative  w-[20px] h-[18px] ">
            <img src={review} className=" absolute w-[20px] h-[18px] " />
            <img src={quotes} className=" absolute left-1.5 top-1" />
          </div>
          <p onClick={goReviewWrite} className="ms-1 text-[15px] font-[500] underline underline-offset-4">
            후기 쓰기
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center py-4 bg-[#ffffff] rounded-base shadow-whiteBox h-[112px] border-[1px] border-solid border-[#EDEDED] opacity-80 mb-[41px]">
        <img src={human} />
        <p className="text-[16px] font-[500] ms-[5px] me-[7px]">{reviewData.reviewCount}</p>
        <Rating rating={reviewData.averageRate} width={49} height={49} />
      </div>
      <h1 className="text-[24px] font-[700] mb-[10px]">실제 증량러들의 생생한 한줄평!</h1>
      {reviewData.reviews.map((box) => (
        <ReviewBox key={box.id} {...box} />
      ))}
    </div>
  )
}

export default RecordReview
