import React from "react";

type TitleType = {
  title: string;
  subTitle?: string;
};

const Title = (text: TitleType) => {
  const { title, subTitle } = text;

  return (
    <h1>
      {title}
      <small>{subTitle}</small>
    </h1>
  );
};

export default Title;
