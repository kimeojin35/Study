import React, { ReactDOM } from "react";
import { Provider } from "react-redux";
import { createStore } from "react-redux";
import App from "./App";

const 체중 = 100;

function reducer(state = 체중, action) {
  if (action.type === "증가") {
    state++;
    return state;
  } else if (action.type === "감소") {
    state--;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
