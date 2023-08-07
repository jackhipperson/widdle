

const Square = props => {
    return (
        <div className="border-slate-300 border-2 h-[62px] w-[62.5px] m-0.5">
            {props.children}
        </div>
    )
}

export default Square;