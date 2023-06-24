import { useState } from 'react'
import Main from '../../components/Main'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../../components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Main />
    </>
  )
}

export default App
