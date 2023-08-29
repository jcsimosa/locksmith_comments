import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import Car from './Car';

function App() {

  let [cars , setCars] = useState([])
  let [comment, setComment] = useState([])

  useEffect(() => {
    fetch('/all')
    .then(res => res.json()).then(data => setCars(data))
  },[])
  
  useEffect(() => {
    fetch('/comments')
    .then(resp => resp.json()).then(data => (setComment(data)))
  },[])

//   let allCars = cars.map((car) => {
//     return (
//         <LandingPage key={car.id} cars={car}/>
//     )
// })


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage cars={cars}/>}></Route>
        <Route path="cars/:Model/:id" element={<Car cars={cars}/>}></Route>
      </Routes>
        
      
      {/* {allCars} */}
      
    </div>
  );
}

export default App;
