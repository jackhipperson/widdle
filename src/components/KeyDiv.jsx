import { useContext } from "react";
import { gameContext } from "./store/GameProvider";

useContext;

const KeyDiv = (props) => {
  const gameCtx = useContext(gameContext);

  const handleClick = (event) => {
    if (event.target.id === "DEL") {
      gameCtx.onDel();
    } else if (event.target.id === "ENTER") {
      gameCtx.onEnter();
    } else {
      gameCtx.onAdd(event.target.id);
    }
  };

  const correct = gameCtx.letters.correct.includes(props.id)
  const almost = !correct && gameCtx.letters.almost.includes(props.id)
  const used = !correct && !almost && gameCtx.letters.letters.includes(props.id)
  const unused = !correct && !almost && !used

  const keyClass =
  "flex flex-col cursor-pointer rounded-md font-bold mx-0.5 h-[58px] items-center justify-center " +
  `${props.id.length === 1 ? "w-[43px] text-xl " : "w-[70px] text-xs "}` +
  `${correct ? "bg-[#538d4e] text-white " : ""}` +
  `${almost ? "bg-[#c9b458] text-white " : ""}` +
  `${used ? "bg-[#86888a] text-white " : ""}` +
  `${unused ? "bg-slate-300 " : ""}`

  return (
    <div id={props.id} onClick={handleClick} className={keyClass}>
      {props.children}
    </div>
  );
};

export default KeyDiv;
