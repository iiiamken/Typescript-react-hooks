import { useState, useEffect, useCallback, useMemo, useRef } from "react"

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [users] = useState<User | null>(null)

  //useEffect
  useEffect(() => {
    console.log("mounting")
    console.log(users)

    // cleanup function
    return () => {
      console.log("unmounting")
    }
  }, [users])

  //useCallback
  const addTwo = useCallback(
    (
      //if there were any event passed in
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => setCount((prev) => prev + 1),
    []
  )

  //useMemo
  type fibFunc = (n: number) => number
  /**
   * Calculates the Fibonacci number for a given input.
   *
   * @param {number} n - The input number for which to calculate the Fibonacci number.
   * @return {number} The Fibonacci number corresponding to the input.
   */
  const fib: fibFunc = (n) => {
    if (n <= 1) return 1
    return fib(n - 1) + fib(n - 2)
  }

  const myNum = 10
  const memoizedFib = useMemo(() => fib(myNum), [myNum])

  //useRef
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <h2>{memoizedFib}</h2>
      <input ref={inputRef} />
    </div>
  )
}

export default App
