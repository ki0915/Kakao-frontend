import { useState, MouseEvent, ChangeEvent } from "react";
import React from "react";

const Adder = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);

  const changeNumber1 = (event: ChangeEvent<HTMLInputElement>) => {
    const number = event.currentTarget.value;
    if (number.length === 0) {
      setNumber1(0);
    } else {
      setNumber1(Number.parseInt(number));
    }
  };
  const changeNumber2 = (event: ChangeEvent<HTMLInputElement>) => {
    const number2 = event.currentTarget.value;
    if (number2.length === 0) {
      setNumber2(0);
    } else {
      setNumber1(Number.parseInt(number2));
    }
  };

  return (
    <section>
      <input type="text" onChange={changeNumber1} />
      +
      <input type="text" onChange={changeNumber2} />
      result: {number1 + number2}
    </section>
  );
};

export default Adder;
