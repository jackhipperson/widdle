import React, { useContext } from "react";
import { gameContext } from "./store/GameProvider";

const Square = (props) => {
  const gameCtx = useContext(gameContext);
  const letter = gameCtx.board.board[props.attemptNum][props.letterPos];
  const gameAttemptNum = gameCtx.currentPos.attempt;
  const squareAttemptNum = props.attemptNum;

  const correct =
    gameCtx.board.style[props.attemptNum][props.letterPos] === "GREEN" &&
    gameAttemptNum > squareAttemptNum;
  const almost =
    gameCtx.board.style[props.attemptNum][props.letterPos] === "AMBER";
  gameAttemptNum > squareAttemptNum;
  const incorrect =
    gameCtx.board.style[props.attemptNum][props.letterPos] === "GREY" &&
    gameAttemptNum > squareAttemptNum;
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
