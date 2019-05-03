import React from "react";
import renderDangerouslyText from "../helpers/dangerouslyText";

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
          {...renderDangerouslyText(text)}
        />
      )
    );

    return <Tag className={className}>{listItems}</Tag>;
  }

  return renderList();
};

export default List;
