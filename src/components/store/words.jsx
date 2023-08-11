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

export const generateGameWords = async () => {
  let gameWords;
  await fetch(gameWordsTxt)
    .then((response) => response.text())
    .then((result) => {
      const gameWordsArray = result.split("\n");
      gameWords = new Set(gameWordsArray);
    });
  return { gameWords };
};