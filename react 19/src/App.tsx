import { Suspense } from "react"
import FetchToDo from "./components/FetchToDo"


const App = () => {
  return (
    <Suspense fallback = "data loading ...">
      <FetchToDo />
    </Suspense>
  )
}

export default App