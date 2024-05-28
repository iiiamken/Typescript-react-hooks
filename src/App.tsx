import { useState, useEffect } from "react"

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [users, setUsers] = useState<User | null>(null)

  useEffect(() => {
    console.log("mounting")
    console.log(users)

    // cleanup function
    return () => {
      console.log("unmounting")
    }
  }, [users])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  )
}

export default App
