import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'
import bulkLogo from './../assets/BULK.svg'
const RootLayout = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 610px)' })
  const isMobile = useMediaQuery({ query: '(max-width: 609px)' })

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(rgb(200, 200, 200), rgba(62, 62, 62, 0.59)), url("/path/to/your-image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }

  if (isDesktop) {
    return (
      <div style={containerStyle}>
        <div style={{ display: 'flex' }}>
          <img src={bulkLogo} alt="벌크캐릭터" className="pr-[50px]"></img>

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
