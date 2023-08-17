import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { gameContext } from "./store/GameProvider";

const Backdrop = () => {
  return <div className="fixed top-0 left-0 w-full h-full z-20"></div>;
};

const Overlay = () => {
  const gameCtx = useContext(gameContext);
  function closeModal() {
    gameCtx.setModal(false);
  }
  const winPercent =
    (parseInt(gameCtx.userStats.won) / parseInt(gameCtx.userStats.played)) *
    100;
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
          <div className="text-4xl">{winPercent}</div>
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
