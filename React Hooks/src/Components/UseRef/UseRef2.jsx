import React, {useState, useEffect, useRef} from 'react'

const UseRef2 = () => {

    const inputElem = useRef(); 

    const btnClicked = () => {
        console.log(inputElem.current);
        inputElem.current.style.background = 'blue';
    }
  return (
    <div>
        <input type="text" ref={inputElem}/>
        <button onClick={btnClicked}>Click Here</button>
    </div>
  )
}

export default UseRef2