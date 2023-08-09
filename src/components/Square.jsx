import { useContext } from "react";
import { gameContext } from "./store/GameProvider";


const Square = props => {

    const gameCtx = useContext(gameContext)
    const letter = gameCtx.board[props.attemptNum][props.letterPos]
    const squareClass = "flex border-2 h-[62px] w-[62.5px] text-4xl font-bold justify-center items-center m-0.5 " + `${letter === "" ? "border-slate-300" : "border-slate-500"}`


    return (
        <div className={squareClass}>
            {letter}
        </div>
    )
}

export default Square;