import { useMediaQuery } from 'react-responsive'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  const isMobile = useMediaQuery({ query: '(max-width:599px)' })
  const isDesktop = useMediaQuery({ query: '(min-width:600px)' })

  const getWidth = () => {
    if (isMobile) {
      return '100%'
    } else if (isDesktop) {
      return '600px'
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: getWidth(), height: '100%', backgroundColor: '#F5F5F5', overflowY: 'auto' }}>
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout
