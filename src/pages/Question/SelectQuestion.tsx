import { FC, useState } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionSmallButton from '../../components/QuestionSmallButton'
import BigGrayButton from '../../components/BigGrayButton'
import { useNavigate } from 'react-router'

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
  const initialSelectedItems = categories.flatMap((category) => category.items)
  const [selectedItems, setSelectedItems] = useState<string[]>(initialSelectedItems)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSelectionChange = (item: string, isNowSelected: boolean) => {
    setSelectedItems((prevSelected) => {
      if (isNowSelected) {
        if (!prevSelected.includes(item)) {
          return [...prevSelected, item]
        }
      } else {
        return prevSelected.filter((prevItem) => prevItem !== item)
      }
      return prevSelected
    })
  }

  const navigate = useNavigate()

  const handleClick = () => {
    if (selectedItems.length < 1) {
      setErrorMessage('하나 이상의 식재료를 선택해야 합니다.')
      return
    }

    setErrorMessage('')
    console.log('localStorage 저장:', JSON.stringify(selectedItems))
    localStorage.setItem(datatype, JSON.stringify(selectedItems))
    navigate(`/${navigateTo}`)
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
                    key={`${item}-${selectedItems.includes(item)}`}
                    text={item}
                    selected={selectedItems.includes(item)}
                    onSelectionChange={handleSelectionChange}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </QuestionInfo>

      <div className="flex flex-col-reverse justify-end items-center w-full mt-[min(3.93vh,2vh)]">
        <BigGrayButton text="다음" navigateTo={navigateTo} navigateTF={false} onClick={handleClick} />
        {errorMessage && <p className="text-red-500 mt-1 text-l mb-[10px]">{errorMessage}</p>}
      </div>
    </div>
  )
}

export default SelectionQuestion
