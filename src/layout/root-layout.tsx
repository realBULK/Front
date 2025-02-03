import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px', height: '100%', backgroundColor: '#F5F5F5', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
