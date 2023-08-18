import React, { useContext } from 'react'
import { gameContext } from './store/GameProvider'

function DistributionItem(props) {
  const gameCtx = useContext(gameContext)
  const itemClass = "flex flex-row w-[" + (parseInt(props.wordTotal / props.maxWordWin) * 100) + "%] justify-end bg-[#787c7e] pr-1 text-white"

  return (
        <div className="flex flex-row my-2">
          <div className="flex flex-row pr-2">{props.id}</div>
          <div className="flex flex-row w-[100%]">
            <div className={itemClass}><p>{props.wordTotal}</p></div>
          </div>
        </div>
  )
}

export default DistributionItem