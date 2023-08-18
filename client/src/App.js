import './App.css';
import { useEffect, useState } from 'react';
import LandingPage from './LandingPage';

function App() {

  let [car , setCar] = useState([])

  useEffect(() => {
    fetch('/all')
    .then(res => res.json()).then(data => setCar(data))
  },[])
  
  useEffect(() => {
    fetch('/comments')
    .then(resp => resp.json()).then(data => (console.log(data)))
  },[])


  return (
    <div className="App">
      <LandingPage/>

    </div>
  );
}

export default App;
