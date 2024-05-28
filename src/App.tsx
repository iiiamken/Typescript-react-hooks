import { useState, useEffect } from "react"

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState<number>(0)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    console.log("mounting")
  }, [])

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  )
}

export default App
