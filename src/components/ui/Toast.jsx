import ReactDOM from "react-dom";
import { useContext } from "react";
import { gameContext } from "../store/GameProvider";

const Message = () => {
  const gameCtx = useContext(gameContext);
  return <div className="absolute top-[10%] left-[50%] translate-x-[-50%] bg-black rounded-lg text-white p-2">{gameCtx.toast}</div>;
};

const portalElement = document.getElementById("toast");

const Toast = () => {
  const gameCtx = useContext(gameContext);
  return (
    <>{gameCtx.toast && ReactDOM.createPortal(<Message />, portalElement)}</>
  );
};

export default Toast;
