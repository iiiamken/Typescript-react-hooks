import { useState, useEffect, useCallback } from "react"

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User | null>(null)

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

  return (
    <div className="App">
      <button onClick={addTwo}>Add</button>
    </div>
  )
}

export default App
