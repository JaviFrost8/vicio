import React from 'react'
import { drugs } from '../data/drugs'
import sano from '../../public/images/sano.png'

export const SelectionDrug = ({ setDrugSelected }) => {

  return (
    <div className='intro-container'>
      <div className='description-container'>
        <div className='description'>
          <div className='photo-description'><img src={sano} alt='Personaje sano' width='350' /></div>
          <div className='text-description'>
            <p>Bienvenid@</p>
            <p>Éste eres tu. Tu nombre es <strong>Marcos.</strong> Estás sano y tienes toda una vida por delante.</p>
            <p>Pero un día tomas <strong>una decisión.</strong> Puede parecer insignificante al principio... una fiesta, un amigo, una sustancia.</p>
            <p>Lo que hagas a partir de ahora cambiará tu vida <strong>para siempre.</strong></p>
            <p>Elige con cuidado. Cada droga tiene un camino. Cada decisión tiene consecuencias.</p>
          </div>
        </div>

        <div className='drug-container'>
          <h2>Elige como destrozar tu vida</h2>
          <div className='drugs'>
            {
              drugs.map(drug => (
                <button key={drug.id} onClick={() => setDrugSelected(drug.name)} className='btn'>{drug.name}</button>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
