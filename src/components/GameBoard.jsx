import BoardRow from "./BoardRow";

const GameBoard = (props) => {
  return (
    <div className="flex justify-center items-center flex-grow max-w-[500px] mx-auto">
      <div>
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
        <BoardRow />
      </div>
    </div>
  );
};

export default GameBoard;
