import { type } from "os";
import React from "react";

type age = {
  age: number;
};

const Adult = (props: age) => {
  const age = props.age;

  return <>{age >= 20 ? <p>성인</p> : <p>미성년자</p>}</>;
};

export default Adult;
