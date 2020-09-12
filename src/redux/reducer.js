const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
  winTimes: { x: 0, o: 0 },
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
        // For example in the first
        // [0, 1, 2] is a line for win
        // a=0, b=1, c=2
        if (
          state.board[a] &&
          state.board[a] === state.board[b] &&
          state.board[a] === state.board[c]
        ) {
          const winnerPerson = state.board[a]
          return {
            ...state,
            winner: winnerPerson,
            winTimes: {
              ...state.winTimes,
              [winnerPerson]:
                // if winner is empty add to winTimes in state
                state.winner.length === 0
                  ? state.winTimes[winnerPerson] + 1
                  : state.winTimes[winnerPerson],
            },
          }
        }
      }
      // If all the cells were clicked and there was no winner.
      if (state.board.filter((cell) => cell.length === 0).length === 0) {
        return { ...state, winner: "=" }
      }
      return state
    case "NEXT_GAME":
      return { ...initialState, winTimes: state.winTimes }
    case "RESTART_GAME":
      return initialState
    default:
      return state
  }
}

export default XOGameReducer
