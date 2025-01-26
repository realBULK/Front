import characterImg from './../../assets/questionStartCharacter.svg'
import BigWhiteButton from '../../components/BigWhiteButton'
const QuestionStart = () => {
  return (
    <div className="bg-[#F5F5F5] w-full min-h-screen flex flex-col items-center">
      <div className="text-black text-[16px] text-center font-[pretendard] text-base  leading-[1.2] mt-[25.4vh]">
        BULK는 몇가지 질문들을 통해
        <br />
        여러분을 위한 맞춤 증량 계획을 제공합니다!
      </div>
      <div className="text-black text-[32px] font-[pretendard] text-2xl font-bold leading-[1.2] mb-[8.45vh]">
        <br />
        BULK 환영합니다😉
      </div>
      <div className="mb-[4.617vh]">
        <img src={characterImg} alt="벌크캐릭터"></img>
      </div>

      <BigWhiteButton text="맞춤 식단 받아보기" navigateTo="question/1_1"></BigWhiteButton>
    </div>
  )
}

export default QuestionStart
