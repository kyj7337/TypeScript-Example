import React, { useEffect, useState } from "react";
import Child from "./Child";

const Test = () => {
  const [api, setApi] = useState<any>(null);
  useEffect(() => {
    fetch(`https:apid.remofit.co.kr/front/commn/codes?masterCd=handTypeCd`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => setApi(res))
      .then((res) => console.log(res));
  }, []);
  console.log(api);
  return (
    <div>
      hi
      <br />
      {api && api.messageCode && <div>API 있음</div>}
      <hr />
      <Child info={api ? api : undefined} />
    </div>
  );
};

export default Test;
