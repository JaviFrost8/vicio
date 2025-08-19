import React from 'react'
import manos from '../../public/images/manos.jpg'
import { Telephones } from '../components/Telephones'
import { Organitations } from '../components/Organitations'

export const Ayuda = () => {

  return (
    <div>
      <div className='front-page'>
        <div className='text-front-page'>
          <h2>Si estás luchando con el consumo de drogas, no estás solo.</h2><br></br>
          <h2>Pedir ayuda es un paso valiente y posible.</h2>
        </div>
      </div>
      <div className='help-body'>
        <Telephones />
        <Organitations />
      </div>
    </div>
  )
}
