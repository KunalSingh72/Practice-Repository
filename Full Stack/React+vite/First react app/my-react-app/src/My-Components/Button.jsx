
export default function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        border : "none",
        borderRadius: "5px",
        cursor: "pointer",
    }

    // Conditional
    // let count = 0;
    // // const handleClick = () => console.log("Ouch!!");
    // const handleClick2 = (name) => {
    //     if(count < 3){
    //         count++;
    //         console.log(`${name}! You clicked me ${count} times`)
    //     }
    //     else {
    //         console.log(`${name}! Stop clicking me`)
    //     }
    // };


    // event parameter
    const handleClick = (e) => {
        // console.log(e)
        e.target.textContent = "Ouch!";
    }


    return(
        // <button onClick={() => handleClick2("Draco")} style={styles}>Click Me</button>
        
        <button onDoubleClick={(e) => handleClick(e)} style={styles}>Click Me</button>
    )
}