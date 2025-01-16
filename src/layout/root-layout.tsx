import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '393px', height: '100%', backgroundColor: '#EDEFFE', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
