import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import DefaultCircle from '../../assets/defaultCircle.svg'
import HalfCircle from '../../assets/halfCircle.svg'
import FullCircle from '../../assets/fullCircle.svg'
import Check from '../../assets/check.svg'

const SignUp2: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { nickname = '회원' } = location.state || {}

  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)

  const getCircleIcon = (step: number) => {
    if (step < currentStep) {
      return FullCircle
    } else if (step === currentStep) {
      return HalfCircle
    }
    return DefaultCircle
  }

  const renderStepIcon = (step: number) => {
    const isFull = step < currentStep

    return (
      <div className="relative w-4 h-4">
        <img src={getCircleIcon(step)} alt="Progress Icon" className="w-full h-full" />
        {isFull && (
          <img
            src={Check}
            alt="Check Icon"
            className="absolute w-2 h-2"
            style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
          />
        )}
      </div>
    )
  }

  useEffect(() => {
    let currentProgress = 0

    const interval = setInterval(() => {
      currentProgress += 1 // 진행률 증가
      setProgress(currentProgress)

      // 단계별 업데이트
      if (currentProgress >= 33.33 && currentProgress < 66.66) {
        setCurrentStep(1)
      } else if (currentProgress >= 66.66 && currentProgress < 99) {
        setCurrentStep(2)
      } else if (currentProgress >= 99) {
        setCurrentStep(3)
        clearInterval(interval)
        setTimeout(() => {
          navigate('/signup3')
        }, 2500)
      }
    }, 30)

    return () => {
      clearInterval(interval)
    }
  }, [navigate])

  return (
    <div className="h-screen flex flex-col items-center bg-[#F5F5F5] font-pretendard px-6">
      {/* Circular Progress */}
      <div className="mt-36 w-[148px] h-[148px] flex items-center justify-center">
        <div className="relative w-full h-full rounded-full overflow-hidden border border-[#BEA0D4]">
          <div
            className="absolute bottom-0 left-0 w-full bg-[#DED1E8]"
            style={{
              height: `${progress}%`,
              transition: 'height 0.2s linear',
            }}
          ></div>
        </div>
      </div>

      {/* Title */}
      <div className="text-center mt-8 w-full max-w-md">
        <h1 className="text-[#191919] text-center font-[GmarketSansWeight] text-[24px] leading-[39px] whitespace-pre-wrap">
          {nickname}님을 위한 맞춤형{'\n'}증량 식단을 준비하고 있습니다.
        </h1>
      </div>

      <div className="mt-12 flex flex-col gap-6 w-full ml-20 max-w-md">
        {/* 첫 번째 항목 */}
        <div className="flex items-center gap-3">
          {renderStepIcon(1)}
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
            사용자의 증량 목표와 라이프 스타일 분석 중
          </p>
        </div>

        {/* 두 번째 항목 */}
        <div className="flex items-center gap-3">
          {renderStepIcon(2)}
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">
            하루 권장 섭취 칼로리와 영양소 비율 계산 중
          </p>
        </div>

        {/* 세 번째 항목 */}
        <div className="flex items-center gap-3">
          {renderStepIcon(3)}
          <p className="font-[pretendard] text-gray-700 text-[14px] font-semibold">맞춤형 식단을 최적화 하여 준비 중</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp2
