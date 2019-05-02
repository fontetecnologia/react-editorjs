import React from "react";
import { renderText } from "./utils";

const CheckList = props => {
  const { items } = props.data;

  console.log(items);

  function renderCheckList() {
    const listItems = [];
    items.forEach((data, index) =>
      listItems.push(
        <div key={index}>
          <input
            type="checkbox"
            name={`checkbox_${index}`}
            id={`checkbox_${index}`}
            defaultChecked={data.checked}
            readOnly
          />
          <label
            htmlFor={`checkbox_${index}`}
            dangerouslySetInnerHTML={renderText(data.text)}
          />
        </div>
      )
    );

    return listItems;
  }

  return renderCheckList();
};

export default CheckList;
