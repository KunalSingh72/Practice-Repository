// useContext
import ComponentB from "./ComponentB"
import React, { useState, createContext } from 'react';

export const userContext = createContext();

export default function ComponentA(){

    const [user] = useState("Draco");
    


    return(
        <div className="box">
            <h1>Component A</h1>
            <h2>{`hello ${user}`}</h2>
            <userContext.Provider value={user}>
                <ComponentB/>
            </userContext.Provider>
        </div>
    )
} 