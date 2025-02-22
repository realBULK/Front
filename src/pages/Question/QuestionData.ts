export const questionData: Record<string, any> = {
  '1_1': {
    id: 1,
    datatype: 'height&weight',
    type: 'input',
    progress: 8.33,
    bigQuestion: `맞춤 증량 계획을
위해 알려주세요!`,
    smallQuestion: '키와 몸무게를 입력해주세요.',
    inputs: ['키(cm)', '몸무게(kg)'],
    navigateTo: 'question/1_2',
  },
  '1_2': {
    id: 2,
    datatype: 'goal_weight',
    type: 'input',
    progress: 16.66,
    bigQuestion: `맞춤 증량 계획을
위해 알려주세요!`,
    smallQuestion: '목표 몸무게를 알려주세요.',
    inputs: ['몸무게(kg)'],
    navigateTo: 'question/1_3',
  },
  '1_3': {
    id: 3,
    datatype: 'activity_level',
    type: 'button',
    progress: 25,
    bigQuestion: `맞춤 증량 계획을
위해 알려주세요!`,
    smallQuestion: '현재의 활동량은 어느 정도인가요?',
    options: [
      '낮음 (운동 거의 안함)',
      '보통 (주 1-2회 운동)',
      '높음 (주 3회 이상 운동)',
      '매우 높음 (매일 강도 높은 운동)',
    ],
    navigateTo: 'question/2_1',
  },
  '2_1': {
    id: 4,
    datatype: 'meal_number',
    type: 'button',
    progress: 37.5,
    bigQuestion: `식습관에 대해
알려주세요!`,
    smallQuestion: '평소 식사를 몇 끼 하시나요?',
    options: ['1끼', '2끼', '3끼', '4끼'],
    navigateTo: 'question/2_2',
  },
  '2_2': {
    id: 5,
    datatype: 'favorite_food',
    type: 'select',
    progress: 50,
    bigQuestion: `식습관에 대해
알려주세요!`,
    smallQuestion: `평소 즐겨 먹는 음식을 알려주세요.
    
    초록색으로 표시된 항목이 선택된 상태입니다.
    다시 누르면 선택이 해제됩니다.
    
    `,
    categories: [
      {
        title: '채소',
        items: ['브로콜리', '콜리플라워', '양파', '피망', '가지', '양배추', '시금치', '오이', '토마토', '아스파라거스'],
      },
      {
        title: '곡물',
        items: ['쌀', '퀴노아', '메밀', '옥수숫가루'],
      },
      {
        title: '재료',
        items: ['아보카도', '콩', '우유', '달걀', '치즈', '단백질 파우더', '두부', '버섯', '식물성 우유'],
      },
      {
        title: '육류&생선',
        items: ['칠면조', '소고기', '닭고기', '해산물', '돼지고기'],
      },
      {
        title: '과일 & 베리류',
        items: ['감귤류', '사과', '바나나', '배', '키위', '감', '복숭아', '베리류', '포도', '석류'],
      },
    ],
    navigateTo: 'question/3_1',
  },
  '3_1': {
    id: 6,
    datatype: 'meal_time',
    type: 'button',
    progress: 62.5,
    bigQuestion: `라이프스타일에  
대해 알려주세요!`,
    smallQuestion: '식사 시간이 항상 규칙적인 편인가요?',
    options: [
      '매우 규칙적 (아침, 점심, 저녁 시간을 항상 일정하게 지킴)',
      '보통 (대체로 규칙적이지만 가끔 변동 있음)',
      '불규칙적 (매일 식사 시간이 달라짐)',
    ],
    navigateTo: 'question/3_2',
  },
  '3_2': {
    id: 7,
    datatype: 'eating-out',
    type: 'button',
    progress: 75,
    bigQuestion: `라이프스타일에  
대해 알려주세요!`,
    smallQuestion: '주기적으로 밖에서 식사를 하는 상황이 있나요?',
    options: [
      '거의 없음 (대부분 집이나 회사에서 식사)',
      '가끔 있음 (주 1-2회 정도 외식)',
      '자주 있음 (학교, 직장 등 외부에서 주로 식사)',
    ],
    navigateTo: 'question/4_1',
  },
  '4_1': {
    id: 8,
    datatype: 'cook_time',
    type: 'button',
    progress: 87.5,
    bigQuestion: `요리 습관에 대해
알려주세요!`,
    smallQuestion: '요리를 할 시간이 얼마나 있나요?',
    options: ['10분 이내', '10-30분', '30분 이상', '요리를 거의 하지 않음'],
    navigateTo: 'question/4_2',
  },
  '4_2': {
    id: 9,
    datatype: 'delivery_num',
    type: 'button',
    progress: 100,
    bigQuestion: `요리 습관에 대해
알려주세요!`,
    smallQuestion: '배달 음식을 자주 이용하나요?',
    options: ['자주', '가끔', '거의 안함'],
    navigateTo: 'signup',
    specialButton: {
      text: '다음',
      navigateTo: 'signup',
    },
  },
}
