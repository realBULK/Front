const QuestionScreen1_1 = () => {
  return (
    <div className="bg-[#EDEFFE] w-[393px] h-[852px] flex flex-col items-start pl-[86px] pt-[189px]">
      <div>---진행도 바--</div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-gmarketSans text-[40px] font-medium leading-[121%]">
        OOO에 대해 알려주세요!
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-semibold leading-[100%] tracking-[-0.32px]">
        키와 몸무게를 입력해주세요.
      </div>

      <input type="text" placeholder="키(cm)"></input>
      <input type="text" placeholder="몸무게(kg)"></input>
    </div>
  )
}

export default QuestionScreen1_1
