import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
// import { BaseLayout } from './layouts/baseLayout.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { BrowserRouter } from 'react-router-dom'
import { CONFIG } from './config-global.ts'
import { HelmetProvider } from 'react-helmet-async'
import { Router } from './routes/sections/index.tsx'
// import { ApiProvider } from '@reduxjs/toolkit/query/react'
// import { apiSlice } from '@/entities/api/apiSlice.ts'
import '@/shared/styles/global.css'
// import './index.css'

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }
    const { worker } = await import('../mocks/browser')
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start({
        onUnhandledRequest: 'bypass'
    })
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <HelmetProvider>
                <Provider store={store}>
                    {/* <ApiProvider api={apiSlice}> */}
                    <BrowserRouter basename={CONFIG.site.basePath}>
                        <Router />
                    </BrowserRouter>
                    {/* </ApiProvider> */}
                </Provider>
            </HelmetProvider>
        </StrictMode>,
    )
})