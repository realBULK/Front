import { FC, useState } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionSmallButton from '../../components/QuestionSmallButton'
import BigGrayButton from '../../components/BigGrayButton'

interface Category {
  title: string
  items: string[]
}

interface SelectionQuestionProps {
  datatype: string
  progress: number
  bigQuestion: string
  smallQuestion: string
  categories: Category[]
  navigateTo: string
}

const SelectionQuestion: FC<SelectionQuestionProps> = ({
  datatype,
  progress,
  bigQuestion,
  smallQuestion,
  categories,
  navigateTo,
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const dataName = datatype
  const handleSelectionChange = (item: string, isNowSelected: boolean) => {
    setSelectedItems((prevSelected) => {
      if (isNowSelected) {
        return [...prevSelected, item]
      } else {
        return prevSelected.filter((prevItem) => prevItem !== item)
      }
    })
    console.log('현재까지 선택된 items: ', selectedItems)
  }

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
                  <QuestionSmallButton
                    key={idx2}
                    text={item}
                    onSelectionChange={handleSelectionChange}
                    selected={selectedItems.includes(item)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </QuestionInfo>

      <div className="flex flex-col-reverse justify-end items-center w-full mt-[min(3.93vh,2vh)]">
        <BigGrayButton
          text="다음"
          navigateTo={navigateTo}
          onClick={() => {
            console.log('localStorage저장:' + JSON.stringify(selectedItems))
            localStorage.setItem(dataName, JSON.stringify(selectedItems))
          }}
        />
      </div>
    </div>
  )
}

export default SelectionQuestion
