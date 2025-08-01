import { createContext, useContext, useState } from "react";

const GameContext = createContext();

export function GameProvider({ children }){

  const [currentScene, setCurrentScene] = useState(0);
  const [score, setScore] = useState(0);

  return(
    <GameContext.Provider value={{}}>
      { children }
    </GameContext.Provider>
  )
}

export function useGameContext(){
  return useContext(GameContext)
}