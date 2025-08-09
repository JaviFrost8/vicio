import React from 'react'
import { useGameContext } from '../context/GameContext'

export const ResumenDecisions = () => {

  const { reset, score } = useGameContext()

  return (
    <div className='resumen-container'>
      <h3>Resumen decisions</h3>

      <span>Puntuación: {score}</span>
      <button onClick={() => reset()}>Empezar de nuevo</button>
    </div>
  )
}
