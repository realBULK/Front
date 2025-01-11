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
import SignUp4 from './pages/SignUp/SignUp4'
import SignUp5 from './pages/SignUp/SignUp5'

import Question1_1 from './pages/Question/Question1_1'
import Question1_2 from './pages/Question/Question1_2'
import Question1_3 from './pages/Question/Question1_3'
import Question2_1 from './pages/Question/Question2_1'
import Question2_2 from './pages/Question/Question2_2'
import Question3_1 from './pages/Question/Question3_1'
import Question3_2 from './pages/Question/Question3_2'
import Question4_1 from './pages/Question/Question4_1'
import Question4_2 from './pages/Question/Question4_2'
import QuestionStart from './pages/Question/QuestionStart'

import Splash from './pages/Splash/Splash'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div className="bg-blue-50" />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: 'record',
        element: <RecordHome />,
      },
      {
        path: 'record/equal',
        element: <RecordEqual />,
      },
      {
        path: 'record/unequal',
        element: <RecordUnequal />,
      },
      {
        path: 'home',
        element: <Main />,
      },
      {
        index: true,
        element: <Start />,
      },
      {
        path: 'record',
        element: <RecordHome />,
      },
      {
        path: 'record/equal',
        element: <RecordEqual />,
      },
      {
        path: 'record/unequal',
        element: <RecordUnequal />,
      },
      {
        path: 'home',
        element: <Main />,
      },
      {
        path: 'signup',
        element: <SignUp1 />,
      },
      {
        path: 'signup2',
        element: <SignUp2 />,
      },
      {
        path: 'signup3',
        element: <SignUp3 />,
      },
      {
        path: 'signup4',
        element: <SignUp4 />,
      },
      {
        path: 'signup5',
        element: <SignUp5 />,
      },
      {
        path: 'questionstart',
        element: <QuestionStart />,
      },
      {
        path: 'question1_1',
        element: <Question1_1 />,
      },
      {
        path: 'question1_2',
        element: <Question1_2 />,
      },
      {
        path: 'question1_3',
        element: <Question1_3 />,
      },
      {
        path: 'question2_1',
        element: <Question2_1 />,
      },
      {
        path: 'question2_2',
        element: <Question2_2 />,
      },
      {
        path: 'question3_1',
        element: <Question3_1 />,
      },
      {
        path: 'question3_2',
        element: <Question3_2 />,
      },
      {
        path: 'question4_1',
        element: <Question4_1 />,
      },
      {
        path: 'question4_2',
        element: <Question4_2 />,
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
