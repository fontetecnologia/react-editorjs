import React from "react";

// todo encontrar melhor forma de mapear os components de acordo com o tipo 
// que for colocado nas configiracoes no editorJs

const components = {
  paragraph: React.lazy(() => import("./components/Paragraph")),
  header: React.lazy(() => import("./components/Header")),
  list: React.lazy(() => import("./components/List")),
  checklist: React.lazy(() => import("./components/Checklist")),
  simpleImage: React.lazy(() => import("./components/simpleImage")),
  embed: React.lazy(() => import("./components/Embed")),
  quote: React.lazy(() => import("./components/Quote")),
  delimiter: React.lazy(() => import("./components/delimiter"))
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
