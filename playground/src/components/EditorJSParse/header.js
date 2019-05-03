import React from "react";
import { renderText } from "./utils";

const Header = props => {
  const { level, text } = props.data;

  const Tag = `h${level}`;

  return (
    <Tag className="ce-header" dangerouslySetInnerHTML={renderText(text)} />
  );
};

export default Header;
