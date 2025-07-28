import React, { useState } from 'react'
import { WarningScreen } from '../components/WarningScreen';
import { SelectionDrug } from '../components/SelectionDrug';
import { Game } from '../components/Game';

export const GameFlow = () => {

  const [acceptedWarning, setAcceptedWarning] = useState(false);
  const [drugSelected, setDrugSelected] = useState(null)

  return (
    <div className='big-container'>
      {!acceptedWarning ? (
        <WarningScreen onAccept={() => setAcceptedWarning(true)} />

      ) : !drugSelected ? (
        <SelectionDrug 
          setDrugSelected={setDrugSelected}
        />
        
      ) : (
        <Game drug={drugSelected} />
      )}
    </div>
  )
}
