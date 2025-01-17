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

import QuestionPage from './pages/Question/QuestionPage'
import QuestionStart from './pages/Question/QuestionStart'
import RecordMyself from './pages/Record/RecordMyself'
import Suggestion from './pages/Suggestion/Suggestion'
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
        path: 'record/myself',
        element: <RecordMyself />,
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
        path: '/question/:id',
        element: <QuestionPage />,
      },
      {
        path: 'suggestion',
        element: <Suggestion />,
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
