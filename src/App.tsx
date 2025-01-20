import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import RecordHome from './pages/Record/RecordHome'
import Start from './pages/Start/Start'
import Main from './pages/Main/Main'
import RecordEqual from './pages/Record/RecordEqual'
import RecordUnequal from './pages/Record/RecordUnequal'
import SignUp1 from './pages/SignUp/SignUp1'
import SignUp2 from './pages/SignUp/SignUp2'
import SignUp3 from './pages/SignUp/SignUp3'

import QuestionPage from './pages/Question/QuestionPage'
import QuestionStart from './pages/Question/QuestionStart'
import RecordMyself from './pages/Record/RecordMyself'
import Suggestion from './pages/Suggestion/Suggestion'
import SuggestionDetail from './pages/Suggestion/SuggestionDetail'
import Splash from './pages/Splash/Splash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div className="bg-blue-50" />,
    children: [
      {
        index: true, // 기본 페이지 설정
        element: <Start />,
      },
      {
        path: 'home',
        element: <Main />,
      },
      {
        path: 'record',
        children: [
          { index: true, element: <RecordHome /> },
          { path: 'equal', element: <RecordEqual /> },
          { path: 'unequal', element: <RecordUnequal /> },
          { path: 'myself', element: <RecordMyself /> },
        ],
      },
      {
        path: 'signup',
        children: [
          { path: '1', element: <SignUp1 /> },
          { path: '2', element: <SignUp2 /> },
          { path: '3', element: <SignUp3 /> },
        ],
      },
      {
        path: 'question',
        children: [
          { index: true, element: <QuestionStart /> },
          { path: ':id', element: <QuestionPage /> },
        ],
      },
      {
        path: 'suggestion',
        element: <Suggestion />, // 부모 라우트
        children: [
          { path: ':mealId', element: <SuggestionDetail /> }, // 자식 라우트
        ],
      },
      {
        path: 'splash',
        element: <Splash />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
