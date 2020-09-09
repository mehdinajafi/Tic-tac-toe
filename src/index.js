import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import XOApp from "./components/XOApp"
import { Provider } from "react-redux"
import store from "./redux/index"

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <XOApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)
