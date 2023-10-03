import { useState } from "react"

const App = () => {
  let [counter, setCounter] = useState(0)
  const addFunc = () => {
    if (counter < 20) {
      setCounter(counter + 1)
    }
    else{
      counter = 20
    }
  }
  const subFunc = () => {
    if (counter != 0) {
    setCounter(counter - 1)
    }
    else{
      counter = 0
    }
  }
  return (

    <div>
      <h1>useState tut</h1>
      <p>{counter}</p>
      <button
      onClick={addFunc}>
        Count Up!
      </button>

      <button
      onClick={subFunc}>
        Count Down!
      </button>
    </div>

  )
}

export default App;