import React from 'react'
import sano from '../../public/images/sano.png'
import { DrugsButtons } from './DrugsButtons'

export const SelectionDrug = () => {

  return (
    <div className='intro-container'>
      <div className='description-container'>
        <div className='description'>
          <div className='photo-description'><img src={sano} alt='Personaje sano' width='300' /></div>
          <div className='text-description'>
            <p>Bienvenid@</p>
            <br></br>
            <p>Éste eres tú. Te llamas <strong>Diego.</strong> Estás sano.</p>
            <p>Tienes sueños, futuro, una vida entera por delante.</p>
            <br></br>
            <p>Pero un día… tomas <strong>una decisión.</strong></p>
            <p>Puede parecer pequeña: una fiesta, un amigo, una sustancia.</p>
            <br></br>
            <p>Pero esa decisión lo cambia <strong>todo.</strong></p>
            <br></br>
            <p>A partir de ahora, cada elección te acercará a un destino.</p>
            <p>Algunos caminos no tienen vuelta atrás.</p>
            <br></br>
            <p>Elige con cuidado</p>
            <p>Cada droga tiene su historia.</p>
            <p>Cada decisión, sus consecuencias.</p>
          </div>
        </div>

        <div className='drugs-container'>
          <h1 className='destroy-text'>Elige como destrozar tu vida</h1>
          <DrugsButtons />
        </div>
      </div>

      
    </div>
  )
}
