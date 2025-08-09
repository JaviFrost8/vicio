import React, { useState } from 'react'
import { scenes } from '../data/scenes'
import { useGameContext } from '../context/GameContext'
import { SelectChoice } from './SelectChoice'
import { ResumenDecisions } from './ResumenDecisions'

export const Game = () => {
  
  const { drugSelected, currentScene, initialScene, goToScene, addScore, gameOver } = useGameContext();
  const drugFounded = scenes.find(d => d.drug === drugSelected)
  const scene = drugFounded.scenesArray[currentScene]
  

  return (
    <div className='big-container'>
      <div className='game-container'>
        { gameOver ? (
          <ResumenDecisions />
        ) : currentScene !== null ? (
            <div className='decisions-container'>
              <h3>{scene.text}</h3>
              <SelectChoice scene={scene} goToScene={goToScene} addScore={addScore} />
            </div>
        ) : (
            <>
              <div className='welcome-drug-container'>
                <h2 className='title-drug'>{drugFounded.drug}</h2>
                <img className='photo-drug' src={drugFounded.photo} />
                <div className='intro-drug'>{drugFounded.intro}</div>
                <button onClick={() => initialScene()} className='btn'>Empezar</button>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
