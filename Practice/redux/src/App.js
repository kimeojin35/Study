import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const 꺼내온거 = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <p>님의 몸무게 : {꺼내온거}</p>
      <button
        onClick={() => {
          dispatch({ type: "증가" });
        }}
      >
        더하기
      </button>
    </div>
  );
}

export default App;
