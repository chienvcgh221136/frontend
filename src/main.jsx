import React from 'react'  // Thêm dòng này

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AddContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'
const rootElement = document.getElementById('root') // Thêm dòng này
if (!rootElement) {
  throw new Error("Not found 'root' in HTML!")
}
// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>
      <AppContextProvider>
        <App />
      </AppContextProvider>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
)
