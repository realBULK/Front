import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from '../layout/root-layout'
import RecordHome from '../pages/Record/RecordHome'
import Main from './start'
import Home from './Home'

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
        path: 'home',
        element: <Home />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
