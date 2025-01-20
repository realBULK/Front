import { FC } from 'react'
import ProgressBar from '../../components/ProgressBar'
import QuestionSmallButton from '../../components/QuestionSmallButton'
import BlueGradButton from '../../components/BlueGradButton'

interface Category {
  title: string
  items: string[]
}

interface SelectionQuestionProps {
  progress: number
  bigQuestion: string
  smallQuestion: string
  categories: Category[]
  navigateTo: string
}

const SelectionQuestion: FC<SelectionQuestionProps> = ({
  progress,
  bigQuestion,
  smallQuestion,
  categories,
  navigateTo,
}) => {
  return (
    <div className="bg-[#EDEFFE] w-full min-h-screen flex flex-col items-start px-[10%] pt-[9.27vh]">
      <div className="w-full mb-[3.17vh]">
        <ProgressBar progress={progress} />
      </div>

      <div className="flex flex-col justify-center w-[300px] h-[89px] flex-shrink-0 text-black font-[GmarketSansWeight] text-[40px] font-medium leading-[121%] mb-[5.05vh]">
        {bigQuestion.split('\n').map((line, i) => (
          <span key={i}>
            {line}
            <br />
          </span>
        ))}
      </div>

      <div className="text-[#191919] font-pretendard text-[16px] font-[pretendard] font-semibold leading-[100%] tracking-[-0.32px] mb-[2.23vh]">
        {smallQuestion}
      </div>

      <div className="flex flex-col gap-[2.93vh] w-full">
        {categories.map((cat, idx) => (
          <div key={idx}>
            <div className="mb-[1.17vh] text-[#191919] text-left font-pretendard text-[24px] font-extrabold leading-[100%] tracking-[-0.48px]">
              {cat.title}
            </div>
            <div className="flex flex-wrap gap-[5px]">
              {cat.items.map((item, idx2) => (
                <QuestionSmallButton key={idx2} text={item} />
              ))}
            </div>
          </div>
        ))}
        <div className="flex flex-row justify-end items-center w-full gap-[2.35vh] mb-[20px]">
          <BlueGradButton text="완료하기" navigateTo={navigateTo} />
        </div>
      </div>
    </div>
  )
}

export default SelectionQuestion
