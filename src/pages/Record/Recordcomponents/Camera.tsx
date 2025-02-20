import { useEffect, useRef, useState } from 'react'
import API from '@/apis/axiosInstance'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'

const Camera = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [capturedImage, setCapturedImage] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false) // 로딩 상태 추가
  const navigate = useNavigate() // useNavigate 추가

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: 'environment' }, // 후면 카메라
          audio: false,
        })

        if (videoRef.current) {
          videoRef.current.srcObject = stream
        }
      } catch (err) {
        console.error('카메라 접근 실패:', err)
      }
    }

    startCamera()

    return () => {
      if (videoRef.current?.srcObject) {
        ;(videoRef.current.srcObject as MediaStream).getTracks().forEach((track) => track.stop())
      }
    }
  }, [])

  // ✅ 카메라로 찍은 사진을 캡처하는 함수
  const capturePhoto = async () => {
    if (!videoRef.current || !canvasRef.current) return

    const context = canvasRef.current.getContext('2d')
    if (!context) return

    // 캔버스 크기 설정
    canvasRef.current.width = videoRef.current.videoWidth
    canvasRef.current.height = videoRef.current.videoHeight

    // 현재 비디오 프레임을 캔버스에 그림
    context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

    // 데이터 URL로 변환 (PNG 형식)
    const imageDataUrl = canvasRef.current.toDataURL('image.png')
    setCapturedImage(imageDataUrl) // UI 업데이트

    // API에 업로드
    await uploadPhoto(imageDataUrl)
  }

  // ✅ 캡처된 이미지를 API에 업로드하는 함수
  const uploadPhoto = async (imageDataUrl: string) => {
    try {
      setIsLoading(true) // 로딩 시작

      // 데이터 URL을 Blob으로 변환
      const blob = await (await fetch(imageDataUrl)).blob()

      // FormData 생성
      const formData = new FormData()
      formData.append('date', '2024-01-01') // 날짜 추가
      formData.append('mealType', 'BREAKFAST') // 식사 유형 추가
      formData.append('image', blob, 'photo.png') // 이미지 추가

      // API 요청 (multipart/form-data)
      const response = await API.post('/api/records/not-followed', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })

      console.log(response.data.data.foods)

      localStorage.setItem('selectedFoods', JSON.stringify(response.data.data.foods))

      // 사진이 성공적으로 업로드되면, 'RecordEqual' 페이지로 이동하면서 데이터를 전달
      navigate('/record/equal')
    } catch (error) {
      console.error('사진 업로드 실패:', error)
    } finally {
      setIsLoading(false) // 로딩 끝
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-black relative">
      {capturedImage ? (
        <img src={capturedImage} alt="Captured" className="w-full h-auto rounded-lg shadow-lg" />
      ) : (
        <video ref={videoRef} autoPlay playsInline className="w-full h-auto object-cover" />
      )}
      <canvas ref={canvasRef} className="hidden" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[246px] h-[304px] border-[4px] border-transparent rounded-[34px] relative">
          <div className="absolute w-12 h-20 border-t-4 border-l-4 border-yellow-400 top-0 left-0 rounded-tl-[34px]"></div>
          <div className="absolute w-12 h-20 border-t-4 border-r-4 border-yellow-400 top-0 right-0 rounded-tr-[34px]"></div>
          <div className="absolute w-12 h-20 border-b-4 border-l-4 border-yellow-400 bottom-0 left-0 rounded-bl-[34px]"></div>
          <div className="absolute w-12 h-20 border-b-4 border-r-4 border-yellow-400 bottom-0 right-0 rounded-br-[34px]"></div>
        </div>
      </div>

      {/* 로딩 표시 */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <ClipLoader color="#fff" size={150} aria-label="Loading Spinner" data-testid="loader" />
        </div>
      )}

      {/* 촬영 버튼 */}
      <button
        onClick={capturePhoto}
        className="absolute bottom-10 w-16 h-16 bg-white rounded-full shadow-lg border-4 border-gray-400"
      />
    </div>
  )
}

export default Camera
