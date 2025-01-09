import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layout/root-layout'
import RecordHome from '../pages/Record/RecordHome'
import Main from '../pages/Main/Main'

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
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
