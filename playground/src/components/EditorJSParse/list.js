import React from "react";
import { renderText } from "./utils";

const List = props => {
  const { style, items } = props.data;

  const Tag = style === "unordered" ? "ul" : "ol";

  function renderList() {
    const listItems = [];
    items.forEach((text, index) =>
      listItems.push(
        <li key={index} dangerouslySetInnerHTML={renderText(text)} />
      )
    );

    return <Tag>{listItems}</Tag>;
  }

  return renderList();
};

export default List;
