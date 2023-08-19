import React, { useContext } from 'react'
import { gameContext } from './store/GameProvider'

function DistributionItem(props) {
  const gameCtx = useContext(gameContext)
  const itemPercent = parseInt((props.wordTotal / props.maxWordWin) * 100) + "%"
  let colour = "#787c7e"

  console.log(itemPercent);
  if (parseInt(gameCtx.currentPos.attempt) === parseInt(props.id)) {
    colour = "#538d4e"
  } else {
    colour = "#787c7e"
  }

  return (
        <div className="flex flex-row my-2">
          <div className="flex flex-row pr-2">{props.id}</div>
          <div className="flex flex-row w-[100%]">
            <div style={{width: itemPercent, backgroundColor: colour}} className="flex flex-row justify-end pr-1 text-white" ><p>{props.wordTotal}</p></div>
          </div>
        </div>
  )
}

export default DistributionItem