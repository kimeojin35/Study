import { createStore } from "redux";

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

const stor = createStore(reducer);

export default stor;
