// useState 3

import React, { useState } from "react";

export default function Component3(){


    const [food, setFood] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(f => [...f, newFood])
    }

    function handleRemoveFood(index){
        setFood(food.filter((_, i) => i !==index));

    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {food.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name..."/>
            <button onClick={handleAddFood}>Add Food</button>
        </div>
    )
    

}