import React,{useState} from 'react'

function UseState3() {
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        // setCount(count+1); //0+1

        setCount((prev=> prev + 1)) //0+1 = 1
        setCount((prev=> prev + 1)) // 1+1 = 2
        setCount((prev=> prev + 1)) //2+1 = 3
        setCount((prev=> prev + 1)) //3+1 = 4
        
    }
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </div>
  )
}

export default UseState3
