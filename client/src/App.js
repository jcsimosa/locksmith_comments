import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import Car from './Car';
import CreateACar from './CreateACar';
import NavBar from "./NavBar";


function App() {

  const [cars , setCars] = useState([])
  const [comment, setComment] = useState([])
  const [filter , setFilter] = useState('')

  useEffect(() => {
    fetch('/all')
    .then(res => res.json()).then(data => setCars(data))
  },[])
  
  useEffect(() => {
    fetch('/comments')
    .then(resp => resp.json()).then(data => (setComment(data)))
  },[])

  let newCar = (newCar) => {
    setCars(cars => [...cars, newCar])
  }

  let searchBar = obj => {
    setFilter(obj.target.value)
  }

  const filteredCar = cars.filter((car) => {
    if (filter === ''){
      return true
    }
    else {
      return car.Model.toLowerCase().includes(filter.toLocaleLowerCase())
    }
  })
  
  

  return (
    <div className="App">
      <NavBar searchBar={searchBar}/>
      <Routes>
        <Route path='/create_car' element={<CreateACar newCar={newCar}/>}></Route>
        <Route path='/' element={<LandingPage cars={filteredCar} searchBar={searchBar}/>}></Route>
        <Route path="cars/:Model/:id" element={<Car cars={cars}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
