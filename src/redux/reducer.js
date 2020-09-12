const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
}

function XOGameReducer(state = initialState, action) {
  switch (action.type) {
    case "UPDATE_BOARD":
      return state.winner.length === 0 && state.board[action.index].length === 0
        ? {
            ...state,
            turn: state.turn === "x" ? "o" : "x",
            board: state.board.map((cell, cellIndex) =>
              cellIndex === action.index && cell.length === 0
                ? state.turn
                : cell
            ),
          }
        : state
    default:
      return state
  }
}

export default XOGameReducer
