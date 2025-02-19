import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'
import bulkLogo from './../assets/BULK.svg'
import React from 'react'
import background from './../assets/backgroundLogoYes.svg'

const RootLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 699px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  const containerStyle: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    background: `url(${background})`,
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
          <img src={bulkLogo} alt="벌크캐릭터" className="pr-[5vw] invisible" />
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
