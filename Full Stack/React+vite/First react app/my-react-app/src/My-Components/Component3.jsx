// useState 2

import React, { useState } from "react";

export default function Component3(){


    const [car, setCar] = useState({year: 2024, make: "Ford", model: "Mustang"})

    function handleYearChange(event){
        setCar((c) => ({...c, year: event.target.value}))
    }

    function handleMakeChange(event){
        setCar((c) => ({...c, make: event.target.value}))
    }

    function handleModelChange(event){
        setCar((c) => ({...c, model: event.target.value}))
    }

    return(
        <div>
            <p>Your favourite car is :{car.year} {car.make} {car.model}</p>
            <input onChange={handleYearChange}type="number" value={car.year}/><br/>
            <input onChange={handleMakeChange}type="text" value={car.make}/><br/>
            <input onChange={handleModelChange}type="text" value={car.model}/><br/>
        </div>
    )
    

}