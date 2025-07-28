import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
   
  return (
    <div className='big-container'>
      <div className='title-container'>
        <h1 className='vicio'>VICIO</h1>
        <h2 className='text-title'>Te partirá el alma en dosis</h2>
        <button className='btn'><Link to='/game'>Empezar</Link></button>
      </div>
    </div>
  )
}
