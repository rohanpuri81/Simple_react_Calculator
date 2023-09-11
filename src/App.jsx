import { useState } from 'react'
import Calculator from './Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{height:"100vh",width:"100vw", display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Calculator />
    </div>
  )
}

export default App
