import React from "react";
import { NavLink } from "react-router-dom";



let LandingPage = ({cars})=> {

    console.log(cars)
    
    let clickImg  = (e) => {
        console.log(e)
    }
    

    return(
     
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {cars.map((car) => (
                        <div key={car.id} className="group">
                            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                                <NavLink to={'null'}>
                                    <img
                                    src={car.img}
                                    alt={car.img}
                                    className="h-full w-full object-cover h-48 w-96 object-center group-hover:opacity-75"
                                    />
                                </NavLink>     
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{car.Make} {car.Model}</h3>
                            
                            <p className="mt-1 text-lg font-medium text-gray-900">Year:{car.Year}</p>
                        </div>
                    ))}
                    </div>
                </div>
            </div>    
            {/* <img src={cars.img} onClick={clickImg} ></img>
            <h1>{cars.Make} {cars.Model} {cars.Year}</h1> */}
            
        </div>
    )
}

export default LandingPage