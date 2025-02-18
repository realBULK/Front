import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'
import bulkLogo from './../assets/BULK.svg'
import React from 'react'

const RootLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 599px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 600px)' })

  const containerStyle: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    background: 'linear-gradient(rgba(200,200,200,0.8), rgba(70, 70, 70, 0.8)), url("/path/to/your-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }

  if (isDesktop) {
    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex' }}>
          <img src={bulkLogo} alt="벌크캐릭터" className="pr-[100px]" />
          <div
            style={{
              width: '460px',
              backgroundColor: '#F5F5F5',
              overflowY: 'auto',
            }}
          >
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div style={containerStyle}>
        <div
          style={{
            width: '100%',
            maxWidth: '460px',
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
