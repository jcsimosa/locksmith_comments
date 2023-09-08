import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import { Route, Routes } from 'react-router-dom';
import Car from './Car';
import CreateACar from './CreateACar';
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


  return (
    <div className="App">
      <Routes>
        <Route path='/create_car' element={<CreateACar/>}></Route>
        <Route path='/' element={<LandingPage cars={cars}/>}></Route>
        <Route path="cars/:Model/:id" element={<Car cars={cars}/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
