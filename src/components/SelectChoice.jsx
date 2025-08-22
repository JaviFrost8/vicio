import React, { useState } from 'react'
import { useGameContext } from '../context/GameContext'

export const SelectChoice = ({ scene, goToScene, addScore }) => {

  const finalExists = scene.isFinal
  const { theGameIsOver } = useGameContext();

  return (
    <div className='btns-decisions-container'>
      {scene.choices?.map((choice, index) => (
        <button className='btn-option' onClick={() => {
          goToScene(choice.next)
          addScore(choice.impact)
        }} key={index}>{choice.text}</button>
      ))}

      {
        finalExists ? <button className='finalBtn' onClick={() => theGameIsOver()}>Ver tu destino</button> : ''
      }
    </div>
  )
}
