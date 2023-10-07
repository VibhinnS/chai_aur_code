import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='justify-center items-center p-1'> Hello World </h1>
    </div>
  )
}

export default App
