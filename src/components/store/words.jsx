import wordBankTxt from "../../assets/word-bank.txt";
import gameWordsTxt from "../../assets/game-words.txt"

export const generateWordBank = async () => {
  let wordBank;
  await fetch(wordBankTxt)
    .then((response) => response.text())
    .then((result) => {
      const wordBankArray = result.split("\n");
      wordBank = new Set(wordBankArray);
    });
  return { wordBank };
};

export const generateGameWord = async () => {
  let gameWord;
  await fetch(gameWordsTxt)
    .then((response) => response.text())
    .then((result) => {
      const gameWordsArray = result.split("\n");
      gameWord = gameWordsArray[Math.floor(Math.random() * gameWordsArray.length)]
    });
  return { gameWord };
};