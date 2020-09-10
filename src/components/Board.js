import React from "react"
import Cell from "./Cell"
import "../styles/Board.css"

const Board = ({ board }) => {
  return (
    <div className="board">
      {board.map((cell, index) => {
        return <Cell cell={cell} key={index} />
      })}
    </div>
  )
}

export default Board
