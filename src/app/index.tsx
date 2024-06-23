import React from 'react'
import ReactDOM from 'react-dom/client'
import { BaseLayout } from './layouts/baseLayout.tsx'
// import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BaseLayout />
    </React.StrictMode>,
)