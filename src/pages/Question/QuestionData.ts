type QuestionType = 'input' | 'button' | 'select'

interface BaseData {
  type: QuestionType
  progress: number
  bigQuestion: string
  smallQuestion: string
  navigateTo?: string
}

interface InputData extends BaseData {
  type: 'input'
  inputs: string[]
}
interface ButtonData extends BaseData {
  type: 'button'
  options: string[]
}
interface SelectData extends BaseData {
  type: 'select'
  categories: { title: string; items: string[] }[]
}

type QuestionDataItem = InputData | ButtonData | SelectData

export const questionData: Record<string, QuestionDataItem> = {
  q1: {
    type: 'input',
    progress: 25,
    bigQuestion: '000에 대해\n알려주세요!',
    smallQuestion: '키와 몸무게를 입력해주세요.',
    inputs: ['키(cm)', '몸무게(kg)'],
    navigateTo: 'q2',
  },
  q2: {
    type: 'button',
    progress: 50,
    bigQuestion: '식습관에 대해\n알려주세요!',
    smallQuestion: '평소 식사를 몇 끼 하시나요?',
    options: ['1끼', '2끼', '3끼', '4끼'],
    navigateTo: 'q3',
  },
  q3: {
    type: 'select',
    progress: 50,
    bigQuestion: '식습관에 대해\n알려주세요!',
    smallQuestion: '평소 즐겨 먹는 음식을 알려주세요.',
    categories: [
      { title: '채소', items: ['브로콜리', '콜리플라워', '양파'] },
      { title: '과일', items: ['사과', '바나나', '키위'] },
    ],
    navigateTo: 'end',
  },
}
