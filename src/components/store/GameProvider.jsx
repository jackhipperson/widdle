import React, { useState } from "react";
import words, { gameWords } from "./words";

const setUpGame = () => {
  const wordNum = parseInt(Math.random() * gameWords.length);
  const gameWord = gameWords[wordNum];
  console.log(gameWord);
};

export const gameContext = React.createContext();

const defaultBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]

const GameProvider = (props) => {
  const [board, setBoard] = useState(defaultBoard);
  const [currentPos, setCurrentPos] = useState({ attempt:0, letter:0 })

    const onAdd = (key) => {
        if (currentPos.letter > 4) return;
        else {
            const newBoard = [...board];
            newBoard[currentPos.attempt][currentPos.letter] = key
            setBoard(newBoard)
            setCurrentPos({attempt:currentPos.attempt, letter: currentPos.letter + 1})
        }
        }

        const onDel = () => {
            if (currentPos.letter === 0) return;
            else {
                const newBoard = [...board];
                newBoard[currentPos.attempt][currentPos.letter - 1] = ""
                setBoard(newBoard)
                setCurrentPos({attempt:currentPos.attempt, letter: currentPos.letter - 1})
            }
            }



  return (
    <gameContext.Provider value={{board, onAdd, onDel}}>{props.children}</gameContext.Provider>
  );
};

export default GameProvider;
