import React from "react";
import renderDangerouslyText from "../helpers/dangerouslyText";

const Header = props => {
  const { level, text } = props.data;

  const Tag = `h${level}`;

  return (
    <Tag className="ce-header" {...renderDangerouslyText(text)} />
  );
};

export default Header;
