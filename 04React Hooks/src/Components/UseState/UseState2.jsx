import React, {useState} from 'react'

function UseState2() {

    // const [brand, setBrand] = useState('Ferrari');
    // const [model, setModel]  = useState('Roma');
    // const [year, setYear] = useState('2023');
    // const [color, setColor] = useState('red');

    const [car, setCar] = useState({
        brand: "Ferrari",
        model: "Rome",
        color: "Red",
        year: "2023"
    });

    const changeColor = () => {
        setCar((prev)=> {
            return {...prev, color: "blue"}
        })
    }

  return (
    <div>
      <h1>My {car.brand}</h1>
      <h2>It is a {car.color} {car.model} from {car.year}</h2>
      <button onClick={changeColor}>Blue</button>
    </div>
  )
}

export default UseState2
