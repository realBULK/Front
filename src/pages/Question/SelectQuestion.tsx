import { FC, useState } from 'react'
import QuestionInfo from './QuestionInfo'
import QuestionSmallButton from '../../components/question/QuestionSmallButton'
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

function strCut(str: string) {
  return str.replace(/\[|\]|"/g, '')
}

const SelectionQuestion: FC<SelectionQuestionProps> = ({
  datatype,
  progress,
  bigQuestion,
  smallQuestion,
  categories,
  navigateTo,
}) => {
  const allItems = categories.flatMap((cat) => cat.items)
  const [selectedItems, setSelectedItems] = useState<string[]>(allItems)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleSelectionChange = (item: string, isNowSelected: boolean) => {
    setSelectedItems((prev) => {
      if (isNowSelected) {
        return prev.includes(item) ? prev : [...prev, item]
      } else {
        return prev.filter((prevItem) => prevItem !== item)
      }
    })
  }

  const navigate = useNavigate()

  const handleClick = () => {
    if (selectedItems.length < 1) {
      setErrorMessage('하나 이상의 식재료를 선택해야 합니다.')
      return
    }
    setErrorMessage('')
    const stringified = JSON.stringify(selectedItems)
    const finalStr = strCut(stringified)
    localStorage.setItem(datatype, finalStr)
    navigate(`/${navigateTo}`)
  }

  return (
    <div className="bg-[#F5F5F5] h-screen flex flex-col">
      <QuestionInfo progress={progress} bigQuestion={bigQuestion} smallQuestion={smallQuestion}>
        <div className="flex flex-col gap-[2.93vh] w-[323px]">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <div className="mb-[1.17vh] text-[#191919] text-left font-pretendard text-[24px] font-extrabold leading-[100%] tracking-[-0.48px]">
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-[5px]">
                {cat.items.map((item) => (
                  <QuestionSmallButton
                    key={item}
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
      <div className="flex-grow overflow-y-auto" />
      <div className="sticky bottom-0 left-0 right-0 bg-[#F5F5F5] flex flex-col items-center pb-6">
        <BigGrayButton text="다음" navigateTo={navigateTo} navigateTF={false} onClick={handleClick} />
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  )
}

export default SelectionQuestion
