import React from 'react'
import important from '../../public/images/important.webp'

export const WarningAndLimits = () => {

  return (
    <div className='warning-limits-container'>
      <div className='warning-limits'>
        <img src={important} alt='important' />
        <div className='warning-limits-div-text'>
          <h2>Advertencias y límites a tener en cuenta</h2>
          <span>· La información que encontrarás en esta aplicación tiene fines únicamente informativos y de apoyo.</span>
          <span>· No sustituye la atención médica, psicológica o profesional. Si piensas que tu salud física o mental está en riesgo, busca ayuda especializada cuanto antes.</span>
          <span>· En caso de emergencia médica o situación de peligro inmediato, llama al 112 (o al número de emergencias de tu país).</span>
          <span>· Los consejos aquí compartidos pueden ayudarte a dar primeros pasos de autocuidado, pero la recuperación de una adicción requiere, en la mayoría de los casos, tratamiento profesional y acompañamiento.</span>
          <span>· Cada persona es diferente: lo que puede ayudar a una no necesariamente servirá para otra.</span>
          <span>· Esta aplicación no guarda, diagnostica ni evalúa información médica.</span>
        </div>
      </div>
    </div>
  )
}
