import { useState } from "react"

interface User {
  id: number
  username: string
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>count is: {count}</button>
    </div>
  )
}

export default App
