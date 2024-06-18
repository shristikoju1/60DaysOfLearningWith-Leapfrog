import React,{useState,useEffect}  from 'react'

const UseEffect3 = () => {
    const [count, setCount] = useState(0)

    
    useEffect(()=>{
        setTimeout(()=> {
            setCount(count => count+1);
        },2000)
    }, [count])//with dependency (not empty array)

  return (
    <div>
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
    </div>
  )
}

export default UseEffect3