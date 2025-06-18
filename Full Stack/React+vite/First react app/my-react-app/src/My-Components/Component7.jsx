// useEffect 2

import React, { useEffect, useState } from "react";



export default function Component7(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event");

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect(() => {
      document.title = `Size: ${width} x ${height}`;
    
    }, [width, height])
    

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    

    return(
        <>
            <p>Window Width : {width}px</p>
            <p>Window Height : {height}px</p>

        </>
    )
}