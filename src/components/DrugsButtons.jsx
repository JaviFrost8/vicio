import React from 'react'
import { drugs } from '../data/drugs'
import { useGameContext } from '../context/GameContext'

export const DrugsButtons = () => {

  const { setDrugSelected } = useGameContext();

  return (
    <div className='btns-container'>
      {
        drugs.map(drug => (
          <button className='btn-drug' key={drug.id} onClick={() => setDrugSelected(drug.name)}>{drug.name}</button>
        ))
      }
    </div>
  )
}
