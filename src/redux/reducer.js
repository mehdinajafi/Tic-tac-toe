const initialState = {
  board: Array(9).fill(""),
  turn: "x",
  winner: "",
}

function XOGameReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

export default XOGameReducer
