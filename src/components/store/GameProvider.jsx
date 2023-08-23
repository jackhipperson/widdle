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
  const [gameOver, setGameOver] = useState(false);
  const [modal, setModal] = useState(false);
  const [winningWord, setWinningWord] = useState(0);
  const [userStats, setUserStats] = useState({
    played: 0,
    won: 0,
    word1: 0,
    word2: 0,
    word3: 0,
    word4: 0,
    word5: 0,
    word6: 0,
    isOnStreak: "No",
    currentStreak: 0,
    maxStreak: 0,
  });

  useEffect(() => {
    generateWordBank().then((words) => {
      setWordBank(words.wordBank);
    });
  }, []);

  useEffect(() => {
    generateGameWord().then((word) => {
      setGameWord(word.gameWord.toUpperCase());
      console.log(word.gameWord.toUpperCase());
    });
  }, []);

  useEffect(() => {
    const stats = JSON.parse(localStorage.getItem("stats"));
    if (stats) {
      setUserStats(stats);
    } else {
      localStorage.setItem("stats", JSON.stringify(userStats));
    }
  }, []);

  const onAdd = (key) => {
    if (gameOver) return;
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
    if (gameOver) return;
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
    if (gameOver) return;
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
      setGameOver(true);
      let newStats = { ...userStats };
      if (newStats.currentStreak + 1 > newStats.maxStreak) {
        newStats.maxStreak = userStats.currentStreak + 1;
      }
      newStats.played = newStats.played + 1;
      newStats.won = newStats.won + 1;
      newStats.isOnStreak = "Yes";
      newStats.currentStreak = userStats.currentStreak + 1;
      if (currentPos.attempt === 0) {
        setToast("Genius");
        setWinningWord(1);
        newStats.word1 = newStats.word1 + 1;
      } else if (currentPos.attempt === 1) {
        setToast("Magnificent");
        setWinningWord(2);
        newStats.word2 = newStats.word2 + 1;
      } else if (currentPos.attempt === 2) {
        setToast("Impressive");
        setWinningWord(3);
        newStats.word3 = newStats.word3 + 1;
      } else if (currentPos.attempt === 3) {
        setToast("Splendid");
        setWinningWord(4);
        newStats.word4 = newStats.word4 + 1;
      } else if (currentPos.attempt === 4) {
        setToast("Great");
        setWinningWord(5);
        newStats.word5 = newStats.word5 + 1;
      } else if (currentPos.attempt === 5) {
        setToast("Phew");
        setWinningWord(6);
        newStats.word6 = newStats.word6 + 1;
      }
      console.log(newStats);
      localStorage.setItem("stats", JSON.stringify(newStats));
      setUserStats(newStats);
      setTimeout(() => {
        setToast("");
        setModal(true);
      }, 2500);
      clearTimeout();
      return;
    }
    if (
      currentPos.attempt === 5 &&
      board[currentPos.attempt].join("").toLowerCase() !==
        gameWord.toLowerCase()
    ) {
      setToast(gameWord);
      setGameOver(true);
      let newStats = { ...userStats };
      newStats.played = newStats.played + 1;
      newStats.isOnStreak = "No";
      newStats.currentStreak = 0;
      localStorage.setItem("stats", JSON.stringify(newStats));
      setUserStats(newStats);
      setTimeout(() => {
        setToast("");
        setModal(true);
      }, 2500);
      clearTimeout();
      return;
    }
  };

  const resetGameHandler = () => {
    setBoard([
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ]);
    setCurrentPos({ attempt: 0, letter: 0 });
    setLetters(defaultLetters);
    setGameOver(false);
    setModal(false);
    console.log(board);
    generateGameWord().then((word) => {
      setGameWord(word.gameWord.toUpperCase());
      console.log(word.gameWord.toUpperCase());
    });
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
        modal,
        setModal,
        userStats,
        winningWord,
        resetGameHandler,
      }}
    >
      {props.children}
    </gameContext.Provider>
  );
};

export default GameProvider;
