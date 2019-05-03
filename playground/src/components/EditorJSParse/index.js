import React from "react";
import Paragraph from "./paragraph";
import Header from "./header";
import List from "./list";
import CheckList from "./checklist";
import SimpleImage from "./simpleImage";
// import Image from "./image";
import Embed from "./embed";
import Quote from "./quote";
import Delimiter from "./delimiter";

const components = {
  paragraph: Paragraph,
  header: Header,
  list: List,
  checklist: CheckList,
  simpleImage: SimpleImage,
  //   image: Image,
  embed: Embed,
  quote: Quote,
  delimiter: Delimiter
};

const EditorJSParse = props => {
  const { style, blocks } = props;

  function renderBlocks() {
    if (blocks.length === 0) return null;
    const list = [];

    blocks.forEach((block, index) => {
      console.log(block);
      const Component = components[block.type];
      list.push(<Component key={index} data={block.data} />);
    });

    return list;
  }

  return (
    <div style={style}>
      <div className="ce-block__content">{renderBlocks()}</div>
    </div>
  );
};

export default EditorJSParse;
