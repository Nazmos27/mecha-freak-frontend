import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { store } from './redux/store.ts'
import router from './router/routes.tsx'
import ReloadWarning from './components/ReloadWarning.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster position="top-center" richColors />
      <Provider store={store}>
        <ReloadWarning/>
        <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </StrictMode>,
)
