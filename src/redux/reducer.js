const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
}

const linesForWon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

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
    case "CALC_WINNER":
      for (let i = 0; i < linesForWon.length; i++) {
        const [a, b, c] = linesForWon[i]
        if (
          state.board[a] &&
          state.board[a] === state.board[b] &&
          state.board[a] === state.board[c]
        ) {
          return { ...state, winner: state.board[a] }
        }
      }
      if (state.board.filter((cell) => cell.length === 0).length === 0) {
        return { ...state, winner: "=" }
      }
      return state
    default:
      return state
  }
}

export default XOGameReducer
