//not re-rendering the component


import React, { useEffect, useState, useRef } from 'react'

const UseRef1 = () => {

    const [value, setValue] = useState(0)
    const count = useRef(0)

    useEffect(()=>{
        count.current = count.current+1;
    })

  return (
    <div>
        <button onClick={()=>{setValue(prev=> prev-1)}}>-1</button>
        <h1>{value}</h1>
        <button onClick={()=>{setValue(prev=> prev+1)}}>+1</button>
        <h1>Render Count : {count.current}</h1>
    </div>
  )
}

export default UseRef1