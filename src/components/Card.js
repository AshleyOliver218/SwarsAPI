import React from 'react'
import getAllStarships from '../services/swapi'
import {useEffect, useState} from 'react'

export default function Card({ starships }) {

  return (
    
      
       
        <div className="card">{starships.name}</div>
     
   
  )
}
