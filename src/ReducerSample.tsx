import React, { useReducer } from "react";

type Color = "red" | "orange" | "green";

type State = {
  count: number;
  text: string;
  color: Color;
  isGood: boolean;
};
// reducer 함수에서 state 에 들어갈 상태를 객체로 표현해놓음.

type Action =
  | { type: "SET_COUNT"; count: number }
  | { type: "SET_TEXT"; text: string }
  | { type: "SET_COLOR"; color: Color }
  | { type: "TOGGLE_GOOD" };
//아래에 쓰일 Action 에서 타입을 여러개 쓸 수 있게 만들어 놓은 것.

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_COUNT":
      return {
        ...state,
        count: action.count,
      };
    case "SET_TEXT":
      return {
        ...state,
        text: action.text,
      };
    case "SET_COLOR":
      return {
        ...state,
        color: action.color,
      };
    case "TOGGLE_GOOD":
      return {
        ...state,
        isGood: !state.isGood,
      };
    default:
      throw new Error("UN");
  }
}

const ReducerSample = () => {
  const [state, stateDispatch] = useReducer(reducer, {
    count: 0,
    text: "hello",
    color: "red",
    isGood: true,
  });
  const setCount = () => stateDispatch({ type: "SET_COUNT", count: 5 }); // count 를 넣지 않으면 에러발생
  const setText = () => stateDispatch({ type: "SET_TEXT", text: "bye" }); // text 를 넣지 않으면 에러 발생
  const setColor = () => stateDispatch({ type: "SET_COLOR", color: "orange" }); // orange 를 넣지 않으면 에러 발생
  const toggleGood = () => stateDispatch({ type: "TOGGLE_GOOD" });

  return (
    <div>
      <p>
        <code>count: </code> {state.count}
      </p>
      <p>
        <code>text: </code> {state.text}
      </p>
      <p>
        <code>color: </code> {state.color}
      </p>
      <p>
        <code>isGood: </code> {state.isGood ? "true" : "false"}
      </p>
      <div>
        <button onClick={setCount}>SET_COUNT</button>
        <button onClick={setText}>SET_TEXT</button>
        <button onClick={setColor}>SET_COLOR</button>
        <button onClick={toggleGood}>TOGGLE_GOOD</button>
      </div>
    </div>
  );
};

export default ReducerSample;
