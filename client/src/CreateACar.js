import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


let CreateACar = ({newCar}) => {
    
    const [carImg, setCarImg] = useState('')
    const [make, setMake] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')
    const [lishi, setLishi] = useState('')
    const [code , setCode] = useState('')
    const [keyBlade, setKeyBlade] = useState('')

    let navigate = useNavigate()
    
    let submitCarInfo = (e) => {
        e.preventDefault()
        let carInfo = {
            img : carImg,
            Make : make,
            Model: model,
            Year  : year,
            code : code,
            lishi : lishi,
            test_blade : keyBlade
        }
        console.log(carInfo)

        fetch('/cars', {
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(carInfo)
        })
        .then(r => r.json().then(data => {
            newCar(data)
            e.target.reset()
            navigate('/')
        }))

    }

    return (
        <div>
            <div className="flex items-center justify-center mt-4">
            </div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
                <div>
                    
                    <h3 className="text-4xl font-bold text-black-600" >
                        Create New Car
                    </h3>
                    
                </div>
                
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                    <form onSubmit={submitCarInfo}>
                    <div className="mt-4">
                            <label
                                htmlFor="CarImg"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Image:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="CarImg"
                                    required="CarImg"
                                    onChange= {e => setCarImg(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="CarTitle"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Make:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="CarMake"
                                    required="CarMake"
                                    onChange={e => setMake(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                            
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="CarModel"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Model:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="Model"
                                    required="Model"
                                    onChange={e => setModel(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="releasedDate"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Year:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="releasedDate"
                                    required="releasedDate"
                                    onChange={e => setYear(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="releasedDate"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Code:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="releasedDate"
                                    required="releasedDate"
                                    onChange={e => setCode(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                            <div className="mt-4">
                            <label
                                htmlFor="releasedDate"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Lishi:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="releasedDate"
                                    required="releasedDate"
                                    onChange={e => setLishi(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="releasedDate"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Key Blade:
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="releasedDate"
                                    required="releasedDate"
                                    onChange={e => setKeyBlade(e.target.value)}
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Create
                            </button>
                        </div>
                    </form>
                </div>
            </div>  
        </div>
    )
}

export default CreateACar 