import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar } from "@fortawesome/free-solid-svg-icons";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { gameContext } from "./store/GameProvider";

const Header = () => {

    const gameCtx = useContext(gameContext)

    const onStatClickHandler = () => {
        gameCtx.setModal(true)
    }
  return (
    <div className="flex flex-row justify-between items-center text-center border-b border-slate-300 ">
      <div className="flex flex-grow-2 items-center px-4">
        <h1 className="text-4xl font-bold font-serif px-1 py-4">Wordle</h1>
        <FontAwesomeIcon icon={faInfinity} size="lg" />
      </div>
      <div className="flex justify-end p-4">
        <FontAwesomeIcon onClick={onStatClickHandler} icon={faChartBar} />
      </div>
    </div>
  );
};

export default Header;
