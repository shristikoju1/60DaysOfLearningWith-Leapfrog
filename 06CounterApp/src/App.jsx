import { useContext } from "react"
import Counter from "./Components/Counter"
import { CounterContext } from "./Context/Counter"
import './App.css'


function App() {

  const counterState = useContext(CounterContext)
  console.log(counterState)

  return (
    <>
      <div className="App">
        <h1>Count is {counterState.count}</h1>
        <Counter/>
        <Counter/>
        <Counter/>
        <Counter/>
      </div>
    </>
  )
}

export default App
