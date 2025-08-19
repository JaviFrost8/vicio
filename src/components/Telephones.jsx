import React from 'react'

export const Telephones = () => {

  return (
    <>
      <h1>Números de atención inmediata</h1>
        <div className='tlfns-container'>
          <div className='tlfn-container'>
            <h2>Teléfono de ayuda a las drogodependencias</h2>
            <div className='tlfn'>
              <i class="fa-solid fa-phone"></i><span> 900 12 12 12</span>
            </div>
          </div>
          <div className='tlfn-container'>
            <h2>Teléfono de urgencias</h2>
            <div className='tlfn'>
              <i class="fa-solid fa-phone"></i><span> 112</span>
            </div>
          </div>
          <div className='tlfn-container'>
            <h2>Cruz Roja</h2>
            <div className='tlfn'>
              <i class="fa-solid fa-phone"></i><span> 900 22 22 92</span>
            </div>
          </div>
        </div>
    </>
  )
}
