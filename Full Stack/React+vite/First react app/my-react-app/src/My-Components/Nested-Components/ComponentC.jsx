// useContext
import ComponentD from "./ComponentD";
import React, { useContext} from 'react';
import { userContext } from './ComponentA';

export default function ComponentC(){

    const user = useContext(userContext);

    return(
        <div className="box">
            <h1>Component C</h1>
            <h2>Hello again {user}</h2>
            <ComponentD/>
            
        </div>
    )
} 