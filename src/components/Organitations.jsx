import React from 'react'
import proyecto from '../../public/images/proyecto-hombre.png'
import cruz from '../../public/images/cruz-roja.jpg'
import unad from '../../public/images/unad.png'

export const Organitations = () => {

  return (
    <div className='organitations-container'>
        <h1>Organizaciones nacionales</h1>
      <div className='card-container'>
        <div className='card'>
          <div className='card-inner'>
            <img src={proyecto} alt='proyecto-hombre' />
            <div className='info'>
              <span className='info-title'><strong>Proyecto hombre</strong></span>
              <p>Una de las entidades más importantes en España en prevención y tratamiento de adicciones. Está presente en casi todas las comunidades autónomas.</p>
              <span className='info-tlfn'>Teléfono: 915 59 25 44</span>
              <button className='btn'><a href='https://proyectohombre.es/' target='_blank'>Visitar web</a></button>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <img src={cruz} alt='proyecto-hombre' />
            <div className='info'>
              <span className='info-title'><strong>Cruz Roja</strong></span>
              <p>Cuenta con programas de prevención, reducción de daños y apoyo a personas con drogodependencias.</p>
              <span className='info-tlfn'>Teléfono: 900 22 22 92</span>
              <button className='btn'><a href='https://www.cruzroja.es' target=' _blank'>Visitar web</a></button>
            </div>
          </div>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <img src={unad} alt='proyecto-hombre' />
            <div className='info'>
              <span className='info-title'><strong>UNAD</strong></span>
              <p>Unión de Asociaciones y Entidades de Atención al Drogodependiente. Red de ONGs y asociaciones que trabajan en adicciones en toda España.</p>
              <span className='info-tlfn'>Teléfono: 913 54 23 78</span>
              <button className='btn'><a href='https://www.unad.org' target=' _blank'>Visitar web</a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
