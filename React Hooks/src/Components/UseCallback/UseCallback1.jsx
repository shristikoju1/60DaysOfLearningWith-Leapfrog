import React, {useCallback, useState} from 'react'
import Header from './Header';

const UseCallback1 = () => {

    const [count, setCount] = useState(0);

    const newFunc = useCallback(()=>{},[count])


  return (
    <div>
        <Header newFunc={newFunc}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(prev=>prev+1)}>Click me !</button>
    </div>
  )
}

export default UseCallback1