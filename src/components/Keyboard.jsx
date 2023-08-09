import KeyboardRow from "./KeyboardRow.jsx";

const keyboardRow1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const keyboardRow2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const keyboardRow3 = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard = (props) => {
  return (
    <div className="p-2">
      <KeyboardRow id='1' row={keyboardRow1} />
      <KeyboardRow id='2' row={keyboardRow2} />
      <KeyboardRow id='3' row={keyboardRow3} />
    </div>
  );
};

export default Keyboard;
