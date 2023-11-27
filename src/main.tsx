import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'normalize.css'
import QueryProviders from '@utils/query-providers.tsx'
import RoutePage from './pages/routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryProviders hasDevtools={true}>
      <RoutePage />
    </QueryProviders>
  </React.StrictMode>
)
