import React from 'react'
import { scenes } from '../data/scenes'

export const Game = ({ drug }) => {

  const drugFounded = scenes.find(d => d.drug === drug)

  return (
    <div className='big-container'>
      <div className='game-container'>
        <div className='welcome-drug-container'>
          <h2 className='title-drug'>{drugFounded.drug}</h2>
          <div className='intro-drug'>{drugFounded.intro}</div>
          <img className='photo-drug' src={drugFounded.photo} />
          <button className='btn'>Empezar</button>
        </div>
      </div>
    </div>
  )
}
