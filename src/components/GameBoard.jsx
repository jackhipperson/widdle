import { useContext } from "react";
import Square from "./Square";
import gameContext from "./store/GameProvider";

const GameBoard = (props) => {
  const gameCtx = useContext(gameContext);

  return (
    <div className="flex justify-center items-center flex-grow max-w-[500px] mx-auto">
      <div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={0} />
          <Square letterPos={1} attemptNum={0} />
          <Square letterPos={2} attemptNum={0} />
          <Square letterPos={3} attemptNum={0} />
          <Square letterPos={4} attemptNum={0} />
        </div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={1} />
          <Square letterPos={1} attemptNum={1} />
          <Square letterPos={2} attemptNum={1} />
          <Square letterPos={3} attemptNum={1} />
          <Square letterPos={4} attemptNum={1} />
        </div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={2} />
          <Square letterPos={1} attemptNum={2} />
          <Square letterPos={2} attemptNum={2} />
          <Square letterPos={3} attemptNum={2} />
          <Square letterPos={4} attemptNum={2} />
        </div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={3} />
          <Square letterPos={1} attemptNum={3} />
          <Square letterPos={2} attemptNum={3} />
          <Square letterPos={3} attemptNum={3} />
          <Square letterPos={4} attemptNum={3} />
        </div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={4} />
          <Square letterPos={1} attemptNum={4} />
          <Square letterPos={2} attemptNum={4} />
          <Square letterPos={3} attemptNum={4} />
          <Square letterPos={4} attemptNum={4} />
        </div>
        <div className="flex flex-row">
          <Square letterPos={0} attemptNum={5} />
          <Square letterPos={1} attemptNum={5} />
          <Square letterPos={2} attemptNum={5} />
          <Square letterPos={3} attemptNum={5} />
          <Square letterPos={4} attemptNum={5} />
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
