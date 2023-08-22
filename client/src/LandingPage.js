import React from "react";

let LandingPage = ({cars})=> {

    console.log(cars)
    
    
   

    return(
     
        <div>
            <img src={cars.img}></img>
            <h1>{cars.Make} {cars.Model} {cars.Year}</h1>
        </div>
    )
}

export default LandingPage