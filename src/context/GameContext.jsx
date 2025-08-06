import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }){

  const [currentScene, setCurrentScene] = useState(null);
  const [score, setScore] = useState(0);

  function initialScene(){
    setCurrentScene(0)
  }

  function addScore(newScore){
    setScore(score + newScore)
  }

  function goToScene(scene){
    setCurrentScene(scene)
  }

  return(
    <GameContext.Provider value={{
      currentScene,
      score,
      initialScene,
      goToScene,
      addScore
    }}>
      { children }
    </GameContext.Provider>
  )
}

export function useGameContext(){
  return useContext(GameContext)
}