import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layout/root-layout'
import RecordHome from '../pages/Record/RecordHome'
import Main from '../pages/Main/Main'
import SignUp1 from '../pages/SignUp/SignUp_step1'
import SignUp2 from '../pages/SignUp/SignUp_step2'
import SignUp3 from '../pages/SignUp/SignUp_step3'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <div className="bg-blue-50" />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'record',
        element: <RecordHome />,
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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
