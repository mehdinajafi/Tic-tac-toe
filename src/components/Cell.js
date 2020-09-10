import React from "react"
import "../styles/Cell.css"

const Cell = ({ cell }) => {
  return (
    <div className={`cell ${cell === "x" ? "cell-x" : "cell-o"}`}>{cell}</div>
  )
}

export default Cell
