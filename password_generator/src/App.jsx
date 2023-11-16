import './App.css'
import { useState, useCallback, useEffect, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [allowNumber, setallowNumber] = useState(false)
  const [allowChar, setallowChar] = useState(false)
  const [password, setPassword] = useState("")
  const passwordRef = useRef(null)

  const copyPasswordtoClipbBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
  [password])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (allowNumber) str += "1234567890"
    if (allowChar) str += "!#$%&'()*+,-./:;<=>?@[^_`{|}~"
    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(index)
    }
    setPassword(pass)
  }, [length, allowNumber, allowChar, setPassword])


  useEffect(() => {passwordGenerator()}, [length, allowNumber, allowChar, passwordGenerator])
  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-5 mx-5'>PASSWORD GENERATOR</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>


        <input
        type="text"
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />


        <button
        onClick={copyPasswordtoClipbBoard}
        className='outline-none bg-blue-700 text-white px-3 py-8.5 shrink-8'>Copy</button>
      </div>


      <div className='flex text-sm gap-x-2'>
        <div className='flex-items-center gap-x-1'>
          <input 
          type='range'
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>


        <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={allowNumber}
          id='numberInput'
          onChange={() => {
            setallowNumber((prev) => !prev)
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
          <div className='flex items-center gap-x-1'>
          <input 
          type='checkbox'
          defaultChecked={allowChar}
          id='numberInput'
          onChange={() => {
            setallowChar((prev) => !prev)
          }}
          />
          <label htmlFor='numberInput'>Characters</label>


          </div>
        </div>
      </div>
    </div>
  )
}

export default App
