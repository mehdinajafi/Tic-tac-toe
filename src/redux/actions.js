export const updateBoard = (index) => {
  return {
    type: "UPDATE_BOARD",
    index,
  }
}

export const calcWinner = () => {
  return {
    type: "CALC_WINNER",
  }
}

export const nextGame = () => {
  return {
    type: "NEXT_GAME",
  }
}

export const restartGame = () => {
  return {
    type: "RESTART_GAME",
  }
}
