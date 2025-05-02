import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { WagmiProvider } from 'wagmi'
import App from './App.tsx'
import './index.css'
import { config } from './libs/wagmi.config.ts'
import { TanstackProvider } from './providers/tanstack.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TanstackProvider>
      <WagmiProvider config={config}>
        <App />
      </WagmiProvider>
    </TanstackProvider>
  </StrictMode>
)
