import React from "react"
import "../styles/Cell.css"

const Cell = ({ cell, onClickCell }) => {
  return (
    <div
      className={`cell ${cell === "x" ? "cell-x" : "cell-o"}`}
      onClick={onClickCell}
    >
      {cell}
    </div>
  )
}

export default Cell
