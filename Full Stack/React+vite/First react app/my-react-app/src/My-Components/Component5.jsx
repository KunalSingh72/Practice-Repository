// useState 4

import { useState } from "react";

export default function Component5(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");


    function handleAddCar(){
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};

        setCars(c => ([...c, newCar]));
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }

    function handleRemoveCar(index){
        setCars(c => c.filter((element, i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        setCarMake(event.target.value);
        
    }

    function handleModelChange(event){
        setCarModel(event.target.value);  
    }

    return(
        <>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                    <li key={index} onClick={() => handleRemoveCar(index)}>
                        {car.year} {car.make} {car.model} 
                    </li>
                )}
            </ul>
            <input type="number" value={carYear} onChange={handleYearChange}/><br/>
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter Car make"/><br/>
            <input type="text" value={carModel} onChange={handleModelChange}  placeholder="Enter Car model"/><br/>
            <button onClick={handleAddCar}>Add Car</button>
        </>
    )
}