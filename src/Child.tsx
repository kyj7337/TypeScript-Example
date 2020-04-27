import React, { useState } from "react";

type childProps = {
  info?: any;
};

const Child = ({ info }: childProps) => {
  console.log(info);
  return (
    <div>
      child component
      <div>
        {info &&
          info.data &&
          info.data.content.map((e: any, index: any) => (
            <div key={index}>{e.detailCd}</div>
          ))}
      </div>
    </div>
  );
};

export default Child;
