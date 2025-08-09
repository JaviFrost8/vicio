import React, { useState } from 'react'
import { WarningScreen } from '../components/WarningScreen';
import { SelectionDrug } from '../components/SelectionDrug';
import { Game } from '../components/Game';
import { BackgroundAudio } from '../components/BackgroundAudio';
import { useGameContext } from '../context/GameContext';

export const GameFlow = () => {

  const [acceptedWarning, setAcceptedWarning] = useState(false);
  const { drugSelected, setDrugSelected } = useGameContext()

  return (
    <div className='big-container'>
      {!acceptedWarning ? (
        <WarningScreen onAccept={() => setAcceptedWarning(true)} />

      ) : !drugSelected ? (
        <SelectionDrug />
        
      ) : (
        <>
          <Game />
        </>
      )}

      <BackgroundAudio />
    </div>
  )
}
