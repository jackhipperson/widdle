import KeyDiv from "./KeyDiv.jsx";

const KeyboardRow = (props) => {
  return (
    <div className="flex flex-row mx-auto justify-center mb-2">
      {props.row.map((key) => {
        return <KeyDiv>{key}</KeyDiv>;
      })}
    </div>
  );
};

export default KeyboardRow;
