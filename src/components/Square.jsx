import React, { useContext } from "react";
import { gameContext } from "./store/GameProvider";

const Square = (props) => {
  const gameCtx = useContext(gameContext);
  const letter = gameCtx.board[props.attemptNum][props.letterPos];
  const gameAttemptNum = gameCtx.currentPos.attempt;
  const squareAttemptNum = props.attemptNum;

  let appearsInAttempt = 0;
  let appearsInGameword = 0;
  let occurance = 0;

  for (let i = 0; i < 4; i++) {
    if (gameCtx.gameWord[i] === letter) {
      appearsInGameword += 1;
    }
    if (gameCtx.board[props.attemptNum][i] === letter) {
      appearsInAttempt += 1;
    }
    if (
      i <= props.letterPos &&
      gameCtx.gameWord[i] === gameCtx.board[props.attemptNum][i]
    ) {
      occurance += 1;
    }
  }

  console.log("Appears = " + appearsInGameword + " Occurs = " + occurance + " " + letter);


  const correct =
    gameCtx.gameWord[props.letterPos] === letter &&
    gameAttemptNum > squareAttemptNum;
  const almost =
    !correct &&
    letter !== "" &&
    gameCtx.gameWord.includes(letter) &&
    gameAttemptNum > squareAttemptNum &&
    occurance <= appearsInGameword;
  const incorrect =
    !correct && !almost && letter !== "" && gameAttemptNum > squareAttemptNum;
  const entered = !correct && !almost && !incorrect && letter !== "";
  const empty = letter === "";

  const squareClass =
    "flex h-[62px] w-[62.5px] text-4xl font-bold justify-center items-center m-0.5 " +
    `${correct ? "bg-[#538d4e] text-white " : ""}` +
    `${almost ? "bg-[#c9b458] text-white " : ""}` +
    `${incorrect ? "bg-[#86888a] text-white " : ""}` +
    `${entered ? "border-2 border-slate-500 " : ""}` +
    `${empty ? "border-2 border-slate-300 " : ""}`;

  return <div className={squareClass}>{letter}</div>;
};

export default React.memo(Square);
