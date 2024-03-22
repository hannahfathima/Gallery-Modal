import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modals from './Componant/Modals'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Modals/>
    </>
  )
}

export default App
