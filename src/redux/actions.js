export const updateBoard = (index) => {
  return {
    type: "UPDATE_BOARD",
    index,
  }
}

export const changeTurn = () => {
  return {
    type: "CHANGE_TURN",
  }
}

export const calcWinner = () => {
  return {
    type: "CALC_WINNER",
  }
}

export const restartGame = () => {
  return {
    type: "RESTART_GAME",
  }
}
