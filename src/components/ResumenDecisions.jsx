import React from 'react'
import { useGameContext } from '../context/GameContext'
import { drugsImages } from '../data/drugsImages'
import { deteriorationData } from '../data/deteriorationData';
import { getPercentage } from '../utils/getPercentage';
import { getImageIndex } from '../utils/getImageIndex';

export const ResumenDecisions = () => {

  const { reset, score, drugSelected } = useGameContext()

  const imgIndex = getImageIndex(score, drugSelected)
  const imgSrc = drugsImages[drugSelected][imgIndex]
  const imgSano = drugsImages[drugSelected][0]
  const percentage = getPercentage(score, drugSelected)

  const { face, body } = deteriorationData[drugSelected][percentage]

  console.log(score)

  return (
    <div className='resumen-container'>

      <h1>{drugSelected}</h1>
      <h2>Tu nivel de deterioro es del {percentage}%</h2>

      <div className='photo-container'>
        <img className='photo-result' src={imgSano} alt='sano' />
        {score >= 11 ? <img className='photo-result' src={imgSrc} alt='deteriorado' /> : ''}
      </div>

      <div className='resume-text-container'>
        {percentage === 0 ? '' : <h2>Daños causados en cara y cuerpo.</h2>}
        <div className='resume-text'>
          {face}
          {body}
        </div>
      </div>
      
      <button className='btn-drug' onClick={() => reset()}>Empezar de nuevo</button>
    </div>
  )
}
