import React from "react";
import { renderText } from "./utils";

const CheckList = props => {
  const { items } = props.data;

  console.log(items);

  function renderCheckList() {
    const listItems = [];
    items.forEach((data, index) => {
      let classCheck = `cdx-checklist__item ${
        data.checked ? "cdx-checklist__item--checked" : ""
      }`;

      listItems.push(
        <div className={classCheck} key={index}>
          <span className="cdx-checklist__item-checkbox" />
          <div
            className="cdx-checklist__item-text"
            dangerouslySetInnerHTML={renderText(data.text)}
          />
        </div>
      );
    });

    return listItems;
  }

  return <div className="cdx-checklist">{renderCheckList()}</div>;
};

export default CheckList;
