import React,{useState,useEffect} from 'react'

const UseEffect2 = () => {
    const [count, setCount] = useState(0)

    
    useEffect(()=>{
        setTimeout(()=> {
            setCount(count => count+1);
        },2000)
    }, [])//with dependency (empty array)

  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}

export default UseEffect2