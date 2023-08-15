import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { gameContext } from "./store/GameProvider";

const Backdrop = () => {
  return <div className="fixed top-0 left-0 w-full h-full z-20"></div>;
};

const Overlay = () => {
  const gameCtx = useContext(gameContext);
  function closeModal() {
    gameCtx.setModal(false)
  }
  return (
    <div className="absolute z-50 w-[520px] h-[600px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] border border-[#f6f7f8] shadow-xl bg-white rounded-lg text-black p-2">
      <div className="flex justify-end font-extrabold">
        <button onClick={closeModal} className="p-2">X</button>
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
