import Square from "./Square";


const BoardRow = props => {
    return (
        <div className="flex flex-row">
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
            <Square></Square>
        </div>
    )
}

export default BoardRow;