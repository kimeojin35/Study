import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

// npm install recoil

// RecoilRoot
function App() {
  return (
    <RecoilRoot>
      <h1>Recoil 실습 (1)</h1>
      <h3>글자수세기</h3>
      <CharacterCounter />
    </RecoilRoot>
  );
}

const textState = atom({
  key: "textState", // 고유값(다른 selector나 atom 관련)
  default: "", // 기본값(초기값)
});

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

// Atom : 상태(state)의 일부를 나타냄
// - atom의 값을 읽는 컴포넌트들은 암묵적으로 atom을 구독
// - atom에 변화가 있다면 atom을 구독하는 모든 컴포넌트가 리렌더링
function TextInput() {
  const [text, setText] = useRecoilState(textState); // 컴포넌트가 atom을 읽고 쓰게 하기 위해

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

// Selector : 파생된 상태(상태의 변화)의 일부를 나타냄
// - 순수 함수(파생된 상태를 어던 방법으로든 주어진 상태를 수정)에 전달된
const charCountState = selector({
  key: "charCountState", // 고유값
  get: ({ get }) => {
    //
    const text = get(textState);

    return text.length;
  },
});

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default App;
