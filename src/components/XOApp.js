import React from "react"
import Board from "./Board"
import { connect } from "react-redux"
import { updateBoard, calcWinner, restartGame } from "../redux/actions"
import "../styles/XOApp.css"

const XOApp = ({
  board,
  turn,
  winner,
  updateBoard,
  calcWinner,
  restartGame,
}) => {
  const onClickCell = (index) => {
    updateBoard(index)
    calcWinner()
  }

  return (
    <div className="container">
      <div className="status">
        <div className={`status-gamer ${turn === "x" ? "turn-x" : ""}`}>
          X : 0
        </div>
        <div className={`status-gamer ${turn === "o" ? "turn-o" : ""}`}>
          O : 0
        </div>
      </div>

      <div className="winner">
        <h3>
          {winner === ""
            ? `${turn} turn!`
            : winner === "="
            ? "Its a tie!"
            : `🎉 ${winner} won! 🎉`}
        </h3>
      </div>

      <Board board={board} onClickCell={onClickCell} />

      <div className="btns-wrapper">
        <button type="button" onClick={restartGame} className="btn restart-btn">
          Restart
        </button>
        <button type="button" className="btn next-btn">
          Next
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  updateBoard: (index) => dispatch(updateBoard(index)),
  calcWinner: () => dispatch(calcWinner()),
  restartGame: () => dispatch(restartGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(XOApp)
