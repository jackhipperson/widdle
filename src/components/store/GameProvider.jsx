import React, { useEffect, useState } from "react";
import { generateWordBank, generateGameWord } from "./words";

export const gameContext = React.createContext();

const defaultBoard = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const defaultLetters = { correct: [""], almost: [""], letters: [""] };

const GameProvider = (props) => {
  const [board, setBoard] = useState(defaultBoard);
  const [currentPos, setCurrentPos] = useState({ attempt: 0, letter: 0 });
  const [letters, setLetters] = useState(defaultLetters);
  const [wordBank, setWordBank] = useState(new Set());
  const [toast, setToast] = useState("");
  const [gameWord, setGameWord] = useState("");
  console.log(gameWord);

  useEffect(() => {
    generateWordBank().then((words) => {
      setWordBank(words.wordBank);
    });
  }, []);

  useEffect(() => {
    generateGameWord().then((word) => {
      setGameWord(word.gameWord.toUpperCase());
    });
  }, []);

  const onAdd = (key) => {
    if (currentPos.letter > 4) return;
    else {
      const newBoard = [...board];
      newBoard[currentPos.attempt][currentPos.letter] = key;
      setBoard(newBoard);
      setCurrentPos({
        attempt: currentPos.attempt,
        letter: currentPos.letter + 1,
      });
    }
  };

  const onDel = () => {
    if (currentPos.letter === 0) return;
    else {
      const newBoard = [...board];
      newBoard[currentPos.attempt][currentPos.letter - 1] = "";
      setBoard(newBoard);
      setCurrentPos({
        attempt: currentPos.attempt,
        letter: currentPos.letter - 1,
      });
    }
  };

  const onEnter = () => {
    if (currentPos.letter !== 5) return;
    else if (!wordBank.has(board[currentPos.attempt].join("").toLowerCase())) {
      setToast("Not in word list");
      setTimeout(() => {
        setToast("");
      }, 2500);
      clearTimeout();
      return;
    } else {
      let correctTemp = [...letters.correct];
      let almostTemp = [...letters.almost];
      let otherTemp = [...letters.letters];
      for (var i = 0; i < 5; i++) {
        if (board[currentPos.attempt][i] === gameWord[i]) {
          correctTemp.push(board[currentPos.attempt][i]);
        } else if (gameWord.includes(board[currentPos.attempt][i])) {
          almostTemp.push(board[currentPos.attempt][i]);
        } else {
          otherTemp.push(board[currentPos.attempt][i]);
        }
      }
      setLetters({
        correct: correctTemp,
        almost: almostTemp,
        letters: otherTemp,
      });
      setCurrentPos({ attempt: currentPos.attempt + 1, letter: 0 });
    }
    if (
      board[currentPos.attempt].join("").toLowerCase() ===
      gameWord.toLowerCase()
    ) {
      if (currentPos.attempt === 0) {
        setToast("Genius");
      } else if (currentPos.attempt === 1) {
        setToast("Magnificent");
      } else if (currentPos.attempt === 2) {
        setToast("Impressive");
      } else if (currentPos.attempt === 3) {
        setToast("Splendid");
      } else if (currentPos.attempt === 4) {
        setToast("Great");
      } else if (currentPos.attempt === 5) {
        setToast("Phew");
      }
      setTimeout(() => {
        setToast("");
      }, 2500);
      clearTimeout();
      return;
    }
    if (currentPos.attempt === 5 && board[currentPos.attempt].join("").toLowerCase() !==
    gameWord.toLowerCase()) {
        setToast(gameWord)
        return;
    }
    
  };

  return (
    <gameContext.Provider
      value={{
        board,
        onAdd,
        onDel,
        onEnter,
        gameWord,
        currentPos,
        letters,
        toast,
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameProvider;
