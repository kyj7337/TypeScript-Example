import React, { useState } from "react";
import "./Components1.css";

type Component1 = {
  api: { data: { content: string[] } } | null;
  alertHandle: (name: string) => void;
};

const Components1 = ({ alertHandle, api }: Component1) => {
  const [name, setName] = useState("");
  console.log(api);
  return (
    <div>
      child
      {api &&
        api.data.content.map((e?: any | {}, index?: number) => (
          <div key={index}>{e.detailNm}</div>
        ))}
      <input onChange={(e) => setName(e.target.value)} />
      <img
        src={require("./imgs/black-basketball-hoop-1331750.jpg")}
        alt="사진"
        onClick={() => alertHandle(name)}
      />
    </div>
  );
};

export default Components1;
