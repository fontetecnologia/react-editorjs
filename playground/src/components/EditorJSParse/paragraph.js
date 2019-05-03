import React from "react";
import { renderText } from "./utils";

const Paragraph = props => {
  const text = props.data.text;

  return (
    <div className="ce-paragraph" dangerouslySetInnerHTML={renderText(text)} />
  );
};

export default Paragraph;
