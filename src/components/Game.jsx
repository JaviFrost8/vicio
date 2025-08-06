import React from 'react'
import { scenes } from '../data/scenes'
import { useGameContext } from '../context/GameContext'

export const Game = ({ drug }) => {

  const drugFounded = scenes.find(d => d.drug === drug)
  const { currentScene, initialScene, goToScene, addScore } = useGameContext();
  const scene = drugFounded.scenesArray[currentScene]

  return (
    <div className='big-container'>
      <div className='game-container'>
        {
          currentScene !== null ? (
            <div className='decisions-container'>
              <h3>{scene.text}</h3>
              {scene.choices?.map((choice, index) => (
                <button onClick={() => {
                  goToScene(choice.next)
                  addScore(choice.impact)
                }} key={index}>{choice.text}</button>
              ))}
            </div>
          ) : (
            <>
              <div className='welcome-drug-container'>
                <h2 className='title-drug'>{drugFounded.drug}</h2>
                <div className='intro-drug'>{drugFounded.intro}</div>
                <img className='photo-drug' src={drugFounded.photo} />
                <button onClick={() => initialScene()} className='btn'>Empezar</button>
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}
