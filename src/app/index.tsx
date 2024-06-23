import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { BaseLayout } from './layouts/baseLayout.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
// import './index.css'

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
        return
    }
    const { worker } = await import('../mocks/browser')
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
}

enableMocking().then(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <Provider store={store}>
                <BaseLayout />
            </Provider>
        </StrictMode>,
    )
})