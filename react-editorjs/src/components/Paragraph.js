import React from "react";
import renderDangerouslyText from "../helpers/dangerouslyText";

const Paragraph = props => {
  const text = props.data.text;

  return (
    <div className="ce-paragraph" {...renderDangerouslyText(text)} />
  );
};

export default Paragraph;
