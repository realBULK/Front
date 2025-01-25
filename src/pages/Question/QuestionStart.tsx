import BlueGradButton from '../../components/BigGrayButton'

const Question1_1 = () => {
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start items-center">
      <div className="w-full text-black text-justify font-pretendard text-[22px] font-semibold leading-[121%] tracking-[-1px] px-[10%] pt-[22.18vh] pl-[21.89%]">
        안녕하세요!
        <br />
        BULK에 오신 것을 환영합니다.
        <br />몇 가지 질문에 답해주시면,
        <br />
        당신만을 위한
        <br />
        맞춤 증량 계획을 세워드릴게요.
        <br />
        지금 시작해볼까요?
      </div>

      <BlueGradButton text="시작하기" navigateTo="question/1_1"></BlueGradButton>
    </div>
  )
}

export default Question1_1
