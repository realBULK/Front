import { useState } from 'react'
import * as Yup from 'yup'

interface QuestionComponentProps {
  placeholder: string
}

const QuestionInputComponent: React.FC<QuestionComponentProps> = ({ placeholder }) => {
  const [inputValue, setInputValue] = useState('')
  const [error, setError] = useState('')

  const validationSchema = Yup.object().shape({
    number: Yup.number()
      .typeError('숫자만 입력하세요.')
      .required('값을 입력해야 합니다.')
      .test('decimal-places', '소수점 첫째 자리까지만 입력 가능합니다.', (value) => {
        if (value === undefined || value === null) return false
        return /^\d+(\.\d{1})?$/.test(value.toString())
      }),
  })

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    try {
      await validationSchema.validate({ number: value })
      setError('')
    } catch (err) {
      setError((err as Yup.ValidationError).message)
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] px-4 shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition-colors 
          ${error ? 'bg-[#FFDDDD]' : 'bg-[rgba(255,255,255,0.8)]'} outline-none`}
        value={inputValue}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  )
}

export default QuestionInputComponent
