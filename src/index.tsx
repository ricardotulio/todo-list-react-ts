import * as React from "react"
import * as ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { store } from "./state/task/store"

import { App } from "./presenters/containers"

/* tslint:disable */
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
)
/* tslint:enable */
