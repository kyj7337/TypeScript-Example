import React, { useState } from "react";

type GreetingProps = {
  name: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, onClick }: GreetingProps) => {
  const [nickname, setNickname] = useState("");
  const handleClick = () => onClick(nickname);
  return (
    <div>
      <div>Hello, {name}</div>
      <div>
        <input onChange={(e) => setNickname(e.target.value)} />
      </div>
      <div>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
};

export default Greetings;
