import { useContext } from "react";
import { gameContext } from "./store/GameProvider";

useContext;

const KeyDiv = (props) => {
  const gameCtx = useContext(gameContext);

  const handleClick = (event) => {
    if (event.target.id === "DEL") {
      gameCtx.onDel();
    } else {
      gameCtx.onAdd(event.target.id);
    }
  };

  const keyStyle =
    "flex flex-col cursor-pointer rounded-md bg-slate-300 font-bold mx-1 h-[58px] items-center justify-center " +
    `${props.id.length === 1 ? "w-[43px] text-xl" : "w-[70px] text-xs"}`;
  return (
    <div id={props.id} onClick={handleClick} className={keyStyle}>
      {props.children}
    </div>
  );
};

export default KeyDiv;
