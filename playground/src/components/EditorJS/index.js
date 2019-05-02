import React, { forwardRef, useImperativeHandle } from "react";
import _EditorJS from "@editorjs/editorjs";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";
import Image from "@editorjs/image";
import Embed from "@editorjs/embed";
import Quote from "@editorjs/quote";
import Marker from "@editorjs/marker";
import Delimiter from "@editorjs/delimiter";
// import Link from "@editorjs/link";

const editor = new _EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: "editorjs",
  tools: {
    paragraph: {
      class: Paragraph,
      inlineToolbar: true
    },
    header: {
      class: Header,
      inlineToolbar: true
    },
    list: {
      class: List,
      inlineToolbar: true
    },
    checklist: {
      class: CheckList,
      inlineToolbar: true
    },
    simpleImage: {
      class: SimpleImage,
      inlineToolbar: true
    },
    image: {
      class: Image,
      inlineToolbar: true
    },
    embed: {
      class: Embed,
      inlineToolbar: true
    },
    quote: {
      class: Quote,
      inlineToolbar: true,
      shortcut: "CMD+SHIFT+O",
      config: {
        quotePlaceholder: "Cite algo",
        captionPlaceholder: "Autor"
      }
    },
    marker: {
      class: Marker,
      shortcut: "CMD+SHIFT+M"
    },
    delimiter: Delimiter

    // link: {
    //   class: Link,
    //   inlineToolbar: true
    // }
  },

  /**
   * Enable autofocus
   */

  autofocus: true,

  onReady: () => {
    console.log("Editor.js is ready to work!");
  }
});

const EditorJS = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    async save() {
      try {
        const output = await editor.save();

        return output;
      } catch (error) {
        console.log(`:'/ error: ${error}`);
      }
    }
  }));

  return (
    <>
      <div id="editorjs" style={props.style} />
    </>
  );
});

export default EditorJS;
