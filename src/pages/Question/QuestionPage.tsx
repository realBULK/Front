import { useParams } from 'react-router-dom'
import { questionData } from './QuestionData'
import InputQuestion from './InputQuestion'
import ButtonQuestion from './ButtonQuestion'
import SelectQuestion from './SelectQuestion'

export default function QuestionPage() {
  const { id } = useParams()

  if (!id || !questionData[id]) {
    return <div>존재하지 않는 페이지입니다.</div>
  }

  const q = questionData[id]

  if (q.type === 'input') {
    return (
      <InputQuestion
        id={q.id}
        datatype={q.datatype}
        progress={q.progress}
        bigQuestion={q.bigQuestion}
        smallQuestion={q.smallQuestion}
        inputs={q.inputs}
        nextPage={`/question/${q.navigateTo}`}
      />
    )
  }

  if (q.type === 'button') {
    return (
      <ButtonQuestion
        datatype={q.datatype}
        progress={q.progress}
        bigQuestion={q.bigQuestion}
        smallQuestion={q.smallQuestion}
        options={q.options}
        navigateTo={`/question/${q.navigateTo}`}
        specialButton={q.specialButton}
      />
    )
  }

  if (q.type === 'select') {
    return (
      <SelectQuestion
        datatype={q.datatype}
        progress={q.progress}
        bigQuestion={q.bigQuestion}
        smallQuestion={q.smallQuestion}
        categories={q.categories}
        navigateTo={`/question/${q.navigateTo}`}
      />
    )
  }

  return <div>타입 없는 페이지</div>
}
