import React from "react"
import Board from "./Board"
import { connect } from "react-redux"
import {
  updateBoard,
  calcWinner,
  nextGame,
  restartGame,
} from "../redux/actions"
import "../styles/XOApp.css"

const XOApp = ({
  board,
  turn,
  winner,
  winTimes,
  updateBoard,
  calcWinner,
  nextGame,
  restartGame,
}) => {
  const onClickCell = (index) => {
    updateBoard(index)
    // Calc winner if the game has a winner, the number of wins is added.
    // See ./redux/reducer line 33
    calcWinner()
  }

  return (
    <div className="container">
      <div className="status">
        <div className={`status-gamer ${turn === "x" ? "turn-x" : ""}`}>
          X : {winTimes.x}
        </div>
        <div className={`status-gamer ${turn === "o" ? "turn-o" : ""}`}>
          O : {winTimes.o}
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
        <button type="button" onClick={nextGame} className="btn next-btn">
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
  nextGame: () => dispatch(nextGame()),
  restartGame: () => dispatch(restartGame()),
})

export default connect(mapStateToProps, mapDispatchToProps)(XOApp)
