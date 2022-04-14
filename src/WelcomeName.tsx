import { ChangeEvent, useState } from "react";
import React from "react";

const welcomeName = () => {
  const [name, setName] = useState<string>();

  const updateName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  return (
    <>
      <input type="text" onChange={updateName} />
      <article>반갑습니다{name}님</article>
    </>
  );
};

export default welcomeName;
