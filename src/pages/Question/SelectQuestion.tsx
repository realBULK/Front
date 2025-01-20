import { FC } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionSmallButton from '../../components/QuestionSmallButton'
import BigGrayButton from '../../components/BigGrayButton'

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
    <div className="bg-[#F5F5F5]">
      <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
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
        </div>
      </QuestionInfo>

      <div className="flex flex-col-reverse justify-end items-center w-full mt-[min(3.93vh,2vh)]">
        <BigGrayButton text="다음" navigateTo={navigateTo} />
      </div>
    </div>
  )
}

export default SelectionQuestion
