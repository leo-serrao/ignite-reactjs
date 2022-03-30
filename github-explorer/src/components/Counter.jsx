import {useState} from 'react'

export function Counter() {
  let [counter, setCounter] = useState(0)

  function increment() {
    setCounter(counter +1)
  }

  function decrement() {
    counter > 1 ? setCounter(counter -1) : setCounter(counter = 0)
  }

  return(
    <div>
      <button type="button" onClick={decrement}>Decrement</button>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>Increment</button>
    </div>
  )
}