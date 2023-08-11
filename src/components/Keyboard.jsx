import { useCallback, useEffect, useContext } from "react";
import { gameContext } from "./store/GameProvider.jsx";
import KeyboardRow from "./KeyboardRow.jsx";

const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = (props) => {
  const gameCtx = useContext(gameContext);

  const handleKeyboard = useCallback((event) => {
    if (event.key === "Enter") {
      gameCtx.onEnter();
    } else if (event.key === "Backspace") {
      gameCtx.onDel();
    } else {
      keyboardRow1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          gameCtx.onAdd(key);
        }
      });
      keyboardRow2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          gameCtx.onAdd(key);
        }
      });
      keyboardRow3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          gameCtx.onAdd(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);
    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);
  return (
    <div onKeyDown={handleKeyboard} className="p-2">
      <KeyboardRow id="1" row={keyboardRow1} />
      <KeyboardRow id="2" row={keyboardRow2} />
      <KeyboardRow id="3" row={keyboardRow3} />
    </div>
  );
};

export default Keyboard;
