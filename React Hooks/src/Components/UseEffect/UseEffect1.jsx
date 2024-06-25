import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {

    const [count, setCount] = useState(0)


    //without dependencies
    useEffect(()=>{
        setTimeout(()=> {
            setCount(count => count+1);
        },2000)
    })

  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffect1