import React from 'react'

export const WarningScreen = ({ onAccept }) => {

  return (
    <div className='intro-container'>
      <div className='warning'>
        <h2>⚠️ ¡Advertencia! ⚠️</h2>
        <p>Esta aplicación contiene imágenes que representan el deterioro físico causado por el consumo de drogas.</p>
        <p>El contenido puede ser impactante para personas sensibles o menores de edad. Se recomienda discreción.</p>
        <button className='btn-warning' onClick={onAccept}>Aceptar y continuar</button>
      </div>
    </div>
  )
}
