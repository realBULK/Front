import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 621px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 620px)' })

  if (isDesktop) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <div
          style={{
            width: '150px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#EEE',
            padding: '10px',
          }}
        >
          화면커짐
        </div>

        <div
          style={{
            width: '460px',
            height: '100%',
            backgroundColor: '#F5F5F5',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <div
          style={{
            width: '100%',
            maxWidth: '460px',
            height: '100%',
            backgroundColor: '#F5F5F5',
            overflowY: 'auto',
          }}
        >
          <Outlet />
        </div>
      </div>
    )
  }

  return null
}

export default RootLayout
