import { useNavigate } from 'react-router-dom'
import BlueGradButton from '../../components/BlueGradButton'

const Question1_1 = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start items-center">
      <div className="w-full text-black text-justify font-pretendard text-[22px] font-semibold leading-[121%] tracking-[-1px] px-[10%] pt-[22.18vh] pl-[21.89%]">
        안녕하세요!
        <br /> BULK에 오신 것을 환영해요.
        <br /> 몇가지 질문을 통해,
        <br /> ----
        <img className="mt-[48px] mb-[5px]" src="character3.png" alt="벌크캐릭터" />
      </div>

      <BlueGradButton text="BULK 시작하기" navigateTo="question1_1"></BlueGradButton>
    </div>
  )
}

export default Question1_1
