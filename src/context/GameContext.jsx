import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }){

  const [currentScene, setCurrentScene] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false)
  const [drugSelected, setDrugSelected] = useState(null)

  function initialScene(){
    setCurrentScene(0)
  }

  function addScore(newScore){
    setScore(score + newScore)
  }

  function goToScene(scene){
    setCurrentScene(scene)
  }

  function theGameIsOver(){
    setGameOver(true)
  }

  function reset(){
    setCurrentScene(null)
    setScore(0)
    setGameOver(false)
    setDrugSelected(null)
  }

  return(
    <GameContext.Provider value={{
      currentScene,
      score,
      gameOver,
      drugSelected,
      setDrugSelected,
      initialScene,
      goToScene,
      addScore,
      theGameIsOver,
      reset
    }}>
      { children }
    </GameContext.Provider>
  )
}

export function useGameContext(){
  return useContext(GameContext)
}