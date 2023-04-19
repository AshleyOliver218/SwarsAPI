
import './App.css';
import Card from "./components/Card"
import {useState, useEffect} from 'react'
import axios from 'axios';
import getAllStarShips from './services/swapi';


// import Card from './Componets/Card'
// import Swapi from './services/Swapi'

function App() {
const [starships, setStarships] = useState([])

useEffect(() => {
  getAllStarShips().then(res =>{ 
    setStarships(res.results);
    // console.log(starships)
  })
  }, []);
  

  // const cards = s.name.map((ele,) => {
  //   return(
  //     <card/>
  //   )
  //   })

  return (
    
    <div className="App">
      <h1 className='title'>Star Wars Starships</h1>
      <div className='card-container'>
      {starships.length>0 ? starships.map((ele, i)=> <Card starships={ele}/>) : <h1>loading...</h1>} 
      </div>
    </div>
  );
}

export default App;
