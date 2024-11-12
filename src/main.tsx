import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HashRouter } from 'react-router-dom';

if(import.meta.env.MODE === 'development') {
    createRoot(document.getElementById('root')!).render(
        <StrictMode>
            <HashRouter>
                <App />
            </HashRouter>
        </StrictMode>
    )
}
