import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// async function enableMocking() {
//   if (!import.meta.env.DEV) {
//     return
//   }

//   console.log('Starting MSW worker...')

//   const { worker } = await import('./mocks/browser.ts')
//   await worker.start()

//   console.log('MSW worker started successfully!')
// }

// // 비동기 호출 이후 React 렌더링
// enableMocking().then(() => {
//   const rootElement = document.getElementById('root')
//   if (!rootElement) {
//     console.error('❌ Error: Root element not found!')
//     return
//   }

//   createRoot(rootElement).render(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//   )
// })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
