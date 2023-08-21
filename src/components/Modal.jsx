import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { gameContext } from "./store/GameProvider";
import DistributionItem from "./DistributionItem";


const Backdrop = () => {
  return <div className="fixed top-0 left-0 w-full h-full z-20"></div>;
};

const Overlay = () => {
  const gameCtx = useContext(gameContext);
  function closeModal() {
    gameCtx.setModal(false);
  }
  const winPercent =
    (parseInt(gameCtx.userStats.won) / parseInt(gameCtx.userStats.played) *
    100);

  let maxWordWin = 0;

  if (gameCtx.userStats.word1 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word1;
  }
  if (gameCtx.userStats.word2 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word2;
  }
  if (gameCtx.userStats.word3 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word3;
  }
  if (gameCtx.userStats.word4 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word4;
  }
  if (gameCtx.userStats.word5 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word5;
  }
  if (gameCtx.userStats.word6 > maxWordWin) {
    maxWordWin = gameCtx.userStats.word6;
  }

  return (
    <div className="absolute z-50 w-[520px] h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-[#f6f7f8] shadow-xl bg-white rounded-lg text-black p-2">
      <div className="flex justify-end font-extrabold">
        <button onClick={closeModal} className="p-2">
          X
        </button>
      </div>
      <div className="sm:w-[320px] mx-auto">
        <p className="font-bold text-xl my-2">STATISTICS</p>
      </div>
      <div className="flex flex-row justify-between sm:w-[320px] mx-auto my-2">
        <div className="basis-1/5">
          <div className="text-4xl">{gameCtx.userStats.played}</div>
          <div className="text-xs">Played</div>
        </div>
        <div className="basis-1/5">
          <div className="text-4xl">{winPercent.toFixed(0)}</div>
          <div className="text-xs">Win %</div>
        </div>
        <div className="basis-1/5">
          <div className="text-4xl">{gameCtx.userStats.currentStreak}</div>
          <div className="text-xs">Current Streak</div>
        </div>
        <div className="basis-1/5">
          <div className="text-4xl">{gameCtx.userStats.maxStreak}</div>
          <div className="text-xs">Max Streak</div>
        </div>
      </div>
      <div className="sm:w-[320px] mx-auto">
        <p className="font-bold text-xl my-2">GUESS DISTRIBUTION</p>
      </div>
      <div className="w-[60%] mx-auto">
        <DistributionItem
          id="1"
          word="word1"
          wordTotal={gameCtx.userStats.word1}
          maxWordWin={maxWordWin}
        />
        <DistributionItem
          id="2"
          word="word2"
          wordTotal={gameCtx.userStats.word2}
          maxWordWin={maxWordWin}
        />
        <DistributionItem
          id="3"
          word="word3"
          wordTotal={gameCtx.userStats.word3}
          maxWordWin={maxWordWin}
        />
        <DistributionItem
          id="4"
          word="word4"
          wordTotal={gameCtx.userStats.word4}
          maxWordWin={maxWordWin}
        />
        <DistributionItem
          id="5"
          word="word5"
          wordTotal={gameCtx.userStats.word5}
          maxWordWin={maxWordWin}
        />
        <DistributionItem
          id="6"
          word="word6"
          wordTotal={gameCtx.userStats.word6}
          maxWordWin={maxWordWin}
        />
      </div>
      <div className="p-2">
        <button onClick={gameCtx.resetGameHandler} className="border border-[#787c7e] p-2 hover:bg-[#538d4e] hover:text-white active:bg-[#538d4e] active:text-white" >Next Word</button>
      </div>
    </div>
  );
};
function Modal() {
  const gameCtx = useContext(gameContext);
  const portalOverlay = document.getElementById("overlay");
  const protalBackdrop = document.getElementById("backdrop");

  return (
    <>
      {gameCtx.modal && (
        <>
          {ReactDOM.createPortal(<Backdrop />, protalBackdrop)}
          {ReactDOM.createPortal(<Overlay />, portalOverlay)}
        </>
      )}
    </>
  );
}

export default Modal;
