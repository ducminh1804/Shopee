import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useRouteElement from './useRouteElement'

function App() {
  const route = useRouteElement()
  return <>{route}</>
}

export default App
