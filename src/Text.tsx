import React from "react";

type Text = {
  text: string;
  type: string;
};

const Text_1 = (props: Text) => {
  const text_string = props.text;
  const text_type = props.type;

  return (
    <>
      {text_type == "header" && <h1>{text_string}</h1>}
      {text_type == "bold" && <strong>{text_string}</strong>}
      </>
  );
};

export default Text_1;
