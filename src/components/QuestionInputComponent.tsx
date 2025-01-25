import * as Yup from 'yup'
import { useState } from 'react'

interface QuestionComponentProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
  setValid: (isValid: boolean) => void
}

const QuestionInputComponent: React.FC<QuestionComponentProps> = ({ placeholder, value, onChange, setValid }) => {
  const [error, setError] = useState<string | null>(null)

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
    const inputValue = e.target.value
    onChange(inputValue)

    try {
      await validationSchema.validate({ number: inputValue })
      setError(null)
      setValid(true)
    } catch (err) {
      setError((err as Yup.ValidationError).message)
      setValid(false)
    }
  }

  // useEffect(() => {
  //   console.log('페이지전환')

  //   const inputElement = document.querySelector('input')
  //   if (inputElement) {
  //     inputElement.value = ''
  //   }
  //   return () => {}
  // }, [])

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`w-[327px] h-[55px] rounded-[15px] border border-[#EDEDED] px-4 shadow-[0px_2px_5px_-2px_rgba(0,0,0,0.25)] transition-colors 
          ${error ? 'bg-[#FFDDDD]' : 'bg-[rgba(255,255,255,0.8)]'} outline-none`}
        value={value}
        onChange={handleChange}
      />
      {error && <p className="text-red-500 mt-1 text-sm">{error}</p>}
    </div>
  )
}

export default QuestionInputComponent
