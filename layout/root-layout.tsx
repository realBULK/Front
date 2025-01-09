import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '393px', height: '100vh', backgroundColor: '#EDEFFE' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
