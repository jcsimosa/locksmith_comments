import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import Comments from './Comments';

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
      <LandingPage cars={cars}/>
      
      {/* {allCars} */}
      
    </div>
  );
}

export default App;
