import React from "react";
import renderDangerouslyText from "../helpers/dangerouslyText";

const CheckList = props => {
  const { items } = props.data;

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
            {...renderDangerouslyText(data.text)}
          />
        </div>
      );
    });

    return listItems;
  }

  return <div className="cdx-checklist">{renderCheckList()}</div>;
};

export default CheckList;
