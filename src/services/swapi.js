import axios from 'axios';

const getAllStarShips= async()=> {
try { 
   const res = await axios.get("https://swapi.dev/api/starships/")
   return res.data
} catch (err) {
    console.error(err)
}
}
export default getAllStarShips