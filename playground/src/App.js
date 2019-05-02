import React, { useState, setState, useRef } from "react";

import Editor from "./components/EditorJS";

import EditorParser from "./components/EditorJSParse";

const styles = {
  constainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
    // weigth: "100vw",
    // height: "70vh",
    // margin: 100,
    // overflow: "auto"
  },
  item: {
    flexGrow: 0,
    height: "100vh",
    width: "50vw"
  }
};

const App = () => {
  const [blocks, setBlocks] = useState([]);

  const editorRef = useRef();

  const handlerSave = async () => {
    let output = await editorRef.current.save();

    console.log(output.blocks);
    setBlocks(output.blocks);
  };

  return (
    <>
      <div style={styles.constainer}>
        <button onClick={handlerSave}>Save</button>
      </div>
      <div style={styles.constainer}>
        <Editor ref={editorRef} style={styles.item} />

        <EditorParser
          blocks={blocks}
          style={{ ...styles.item, backgroundColor: "lightGray", padding: 10 }}
        />
      </div>
    </>
  );
};

export default App;
