import React, { useState, useEffect } from "react";
import Components1 from "./Components1";

const Paraents = () => {
  const [api, setApi] = useState(null);
  useEffect(() => {
    fetch(`https:apid.remofit.co.kr/front/commn/codes?masterCd=handTypeCd`, {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => setApi(res));
    //   .then((res) => console.log(res));
  }, []);
  const alertHandle = (e: string) => {
    alert(e);
  };
  return (
    <div>
      Parents
      <Components1 alertHandle={alertHandle} api={api} />
    </div>
  );
};

export default Paraents;
