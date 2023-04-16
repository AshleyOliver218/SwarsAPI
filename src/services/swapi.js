import {useEffect, useState} from 'react'
import axios from 'axios';

// const [starships, setStarships] = useState([corvett, starship])
// const getAllStarships = async () =>{
//     try {
//         const res = await axios.get(`https://swapi.dev/api/starships/`); 
//         return res.data;
//     } catch (err) {
//         console.error(err);
//     }
         
// }
    // const [starships, setStarships] = useState([])

// axios.get('https://swapi.dev/api/starships/').then(res =>{
//    setStarships(res.data.results.map(s => s.name)) 
// })



// const fetchPromise = fetch('https://swapi.dev/api/starships/');

// fetchPromise
//   .then((response) => response.json())
//   //entire response object as JSON data
//   .then((data) => {
//     //go into the data and give array named results
//     console.log(data.results);
//     //for each index in the results array console.log the name property of the object
//     data.results.map((Card)=>{
//         console.log(Card.name)})
//     })
// }


// const baseURL = 'https://swapi.dev/api/';
// function getAxios(customURL, endPoint){
//     return axios.get(customURL ? customURL : baseURL + endPoint)
//     .then (response => response.data)
//     .catch(error => console.error(error))
// }
// function getAllStarships(url){
//     return getAxios(url, 'starships/')
// }

// const getAllStarships = async () => {
// 	try {
// 		const response = await axios.get('https://swapi.dev/api/starships/'); 
// 	return response.data;
// 	} catch (err) {
// 		console.log(err);
// 	}
//   }


//   export default getAllStarships