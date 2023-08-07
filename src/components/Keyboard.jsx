import KeyboardRow from "./KeyboardRow.jsx";

const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keyboardRow3 = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"];

const Keyboard = (props) => {
  return (
    <div className="p-2">
      <KeyboardRow row={keyboardRow1} />
      <KeyboardRow row={keyboardRow2} />
      <KeyboardRow row={keyboardRow3} />
    </div>
  );
};

export default Keyboard;
