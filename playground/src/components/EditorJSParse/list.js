import React from "react";
import { renderText } from "./utils";

const List = props => {
  const { style, items } = props.data;

  const Tag = style === "unordered" ? "ul" : "ol";

  const className = `cdx-list cdx-list--${style}`;

  function renderList() {
    const listItems = [];
    items.forEach((text, index) =>
      listItems.push(
        <li
          className="cdx-list__item"
          key={index}
          dangerouslySetInnerHTML={renderText(text)}
        />
      )
    );

    return <Tag className={className}>{listItems}</Tag>;
  }

  return renderList();
};

export default List;
