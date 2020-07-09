/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import Greeting from "./Greeting";
import Test from "./Test";
import Counter from "./Counter";
import "./App.css";
import MyForm from "./MyForm";
import CounterReducer from "./CounterReducer";
import ReducerSample from "./ReducerSample";
import Paraents from "./Example/Paraents";

const App = () => {
  const onClick = (name: string) => {
    alert(`${name}님 안녕하세요`);
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  let message: string[] = ["hello", "world"];

  let mightBeUndefined: string | undefined = undefined;
  let Obj: {} = { key: "value", big: "parm" };
  let Arr: string[] = ["asd", "fd"];
  return (
    <div className="App">
      <Paraents />
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
