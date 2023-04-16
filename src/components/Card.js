import React from 'react'
import getAllStarships from '../services/swapi'
import {useEffect, useState} from 'react'

export default function Card({ starships }) {

  return (
    <div className='card-container'>
      
       {starships.map(s => (
        <div className="card" key={s}>{s}</div>
       ))} 
    </div>
  )
}
