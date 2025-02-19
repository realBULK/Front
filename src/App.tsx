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
import RecordReview from './pages/Record/RecordReview'
import ReviewWrite from './pages/Record/ReviewWrite'
import Report from './pages/Report/Report'
import Diet from './pages/Diet/Diet'
import SharePage from './pages/Share/Share'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import TodayDiet from './pages/Diet/TodayDiet'
import SignupForm from './pages/SignUp/SignupForm'
import LoginForm from './pages/SignUp/LoginForm'
import NotFound from './pages/Main/not-found'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFound />,
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
        path: 'record/review',
        element: <RecordReview />,
      },
      {
        path: 'record/review/write',
        element: <ReviewWrite />,
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
        path: 'suggestion/:mealId',
        element: <SuggestionDetail />,
      },

      {
        path: 'splash',
        element: <Splash />,
      },
      {
        path: 'report',
        element: <Report />,
      },
      {
        path: 'diet',
        element: <Diet />,
      },
      {
        path: 'diet/today',
        element: <TodayDiet />,
      },
      {
        path: 'group',
        element: <SharePage />,
      },
      {
        path: 'signuppage',
        element: <SignupForm />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
    ],
  },
])

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
