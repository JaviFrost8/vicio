import React from 'react'
import { useGameContext } from '../context/GameContext'
import { drugsImages } from '../data/drugsImages'

export const ResumenDecisions = () => {

  const { reset, score, drugSelected } = useGameContext()

  const imgIndex = getImageIndex(score, drugSelected)
  const imgSrc = drugsImages[drugSelected][imgIndex]
  const imgSano = drugsImages[drugSelected][0]

  function getImageIndex(score, drugSelected) {

    if (drugSelected === 'Ketamina' || drugSelected === 'GHB') {
      
      return score <= 20 ? 0 : 1

    } else {
      if (score <= 10) return 0
      if (score <= 30) return 1
      if (score <= 50) return 2
      if (score <= 70) return 3
      return 4
    }
  }

  return (
    <div className='resumen-container'>

      <h2>Tu nivel de deterioro es el siguiente. {score}</h2>

      <div>
        <img className='photo-result' src={imgSano} alt='sano' />
        {score > 20 ? <img className='photo-result' src={imgSrc} alt='deteriorado' /> : ''}
      </div>
      
      <button onClick={() => reset()}>Empezar de nuevo</button>
    </div>
  )
}
