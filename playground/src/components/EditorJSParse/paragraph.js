import React from "react";
import { renderText } from "./utils";

const Paragraph = props => {
  const text = props.data.text;

  return <p dangerouslySetInnerHTML={renderText(text)} />;
};

export default Paragraph;
