import React from "react";

//props 가 부모 컴포넌트에서 보내는 값이다.
//이 코드 컴포넌트는 buttontype에 맞춰 가공 되어진다.
type ButtonType = {
  name: string;
};

const Button = (props: ButtonType) => {
  const { name } = props;
  return <button>{name}</button>;
}

export default Button;
