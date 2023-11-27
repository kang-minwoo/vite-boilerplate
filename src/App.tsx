import { flexColStyle, gridStyle, wrapperStyle } from './App.css.ts'
import Vite from '@svgs/vite.svg?react'
import { Outlet, useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate()

  return (
    <div className={wrapperStyle}>
      <div>
        <Vite fill="white" width={60} height={60} />
      </div>
      <h1>Vite + React boilerplate</h1>
      <div className={gridStyle}>
        <button onClick={() => navigate('/page1')}>page1 with global suspense</button>
        <button onClick={() => navigate('/page2')}>page2 with global error</button>
        <button onClick={() => navigate('/page3')}>page3 with local suspense</button>
        <button onClick={() => navigate('/page4')}>page4 with local error</button>
        <button onClick={() => navigate('/page5')}>page5 with network check</button>
        <button onClick={() => navigate('/page999')}>empty page with not found</button>
        <button onClick={() => navigate('/')}>go to home</button>
      </div>
      <div className={flexColStyle}>
        <span>pnpm</span>
        <span>vanilla-extract</span>
        <span>React Router</span>
        <span>SVG</span>
        <span>Tanstack React Query</span>
        <span>vitest(Jest)</span>
        <span>Cypress</span>
        <span>Storybook</span>
      </div>
      <Outlet />
    </div>
  )
}

export default App
