import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reduxStore"; // reduxStore.js에서 스토어 가져오기
import MyApp from "./MyApp"; // 이름이 변경된 컴포넌트 가져오기

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
