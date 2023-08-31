import KeyDiv from "./KeyDiv.jsx";

const KeyboardRow = (props) => {
  return (
    <div className="flex flex-row mx-auto justify-center mb-2">
      {props.id === "3" && 
                <KeyDiv key={"ENTER"} id={"ENTER"}>
                ENTER
              </KeyDiv>
      }
      {props.row.map((key) => {
        return (
          <KeyDiv key={key} id={key}>
            {key}
          </KeyDiv>
        );
      })}
            {props.id === "3" && 
                <KeyDiv key={"DEL"} id={"DEL"}>
                DEL
              </KeyDiv>
      }
    </div>
  );
};

export default KeyboardRow;
