
import './App.css';
import Card from "./components/Card"
import {useState, useEffect} from 'react'
import axios from 'axios';


// import Card from './Componets/Card'
// import Swapi from './services/Swapi'

function App() {
const [starships, setStarships] = useState([])

useEffect(() => {
  axios.get("https://swapi.dev/api/starships/").then(res =>{ 
    setStarships(res.data.results.map(s => s.name ));
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
      
      <Card starships={starships}/> 
      
    </div>
  );
}

export default App;
