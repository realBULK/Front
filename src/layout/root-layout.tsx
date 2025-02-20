import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'
import bulkLogo from './../assets/BULK.svg'
import React from 'react'

import background from './../assets/backgroundLogoNo.svg'

const RootLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 699px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 700px)' })

  const containerStyleDesktop: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    background: `url(${background})`,
    backgroundSize: '1500px auto',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    minWidth: '1000px',
  }

  const containerStyleMobile: React.CSSProperties = {
    width: '100vw',
    minHeight: '100vh',
    overflowX: 'hidden',
    overflowY: 'hidden',
    background: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }

  if (isDesktop) {
    return (
      <div style={containerStyleDesktop}>
        <div style={{ display: 'flex' }}>
          <img src={bulkLogo} alt="벌크로고" className="pr-[5vw] " />
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
      <div style={containerStyleMobile}>
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
