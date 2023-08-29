import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

let Car = ({cars}) => {

    let [carInfo , setCarInfo] = useState([])
    let [carComments, setCarComments] = useState('')
    const params = useParams()
    const {id} = params


    useEffect(()=> {
        fetch(`/cars/${id}`)
        .then(r => r.json())
        .then(carData => {
            setCarInfo(carData)
            setCarComments(carData.comments)
        })
    },[])

    console.log(carInfo)

    return(

        <div><div className="flex items-center min-h-screen bg-gray-50">
        <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
            <h1 className="flex items-center font-bold text-center text-2xl">{carInfo.Make} {carInfo.Model} {carInfo.Year}</h1>
            <div className="flex flex-col md:flex-row">
            <div className="h-32 md:h-auto md:w-1/2">
                <img className="object-cover w-full h-full" src={carInfo.img}
                alt="img" 
                />
            </div>
            
                <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
                    <div className="w-full">
                    <div className="flex justify-center">
                    </div>
                    <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                        Create your Comment:
                    </h1>
                    <div>
                        <form onSubmit={null}>
                            <label className="block text-sm">
                            Comment:
                            </label>
                            <input 
                            className="w-full px-4 py-2 text-sm border rounded-md focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
                            placeholder="Comment Here"
                            required 
                            onChange={null}
                            name="comment"
                            />
                            <button
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-grey-600 hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
                                >
                                Comment
                            </button> 
                            </form>     
                            <button
                                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-red-600 border border-transparent rounded-lg active:bg-grey-600 hover:bg-red-700 focus:outline-none focus:shadow-outline-blue"
                                onClick={null}
                                >
                                Delete
                            </button> 
                            
                    </div>
                </div>
            </div> 
        
        </div>
    </div>
</div>
    <p>Released Date:{null}</p></div>
    ) 
}

export default Car

