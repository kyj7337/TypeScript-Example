/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Greeting from "./Greeting";
import Test from "./Test";
import Counter from "./Counter";
import "./App.css";
import MyForm from "./MyForm";
import CounterReducer from "./CounterReducer";
import ReducerSample from "./ReducerSample";

const App = () => {
  const onClick = (name: string) => {
    alert(`${name}님 안녕하세요`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  let message: string[] = ["hello", "world"];

  console.log(message.push("1"));
  console.log(message);
  let mightBeUndefined: string | undefined = undefined;
  console.log(mightBeUndefined);
  let Obj: {} = { key: "value", big: "parm" };
  let Arr: string[] = ["asd", "fd"];
  console.log(Obj);
  console.log(Arr);
  return (
    <div className="App">
      {/* <Greeting name="영준" onClick={onClick} /> */}
      <hr />
      {/* <Test /> */}
      {/* <br />
      <Counter />
      <br />
      <MyForm onSubmit={onSubmit} />
      <br />
      <CounterReducer /> */}
      {/* <ReducerSample /> */}
    </div>
  );
};

export default App;
