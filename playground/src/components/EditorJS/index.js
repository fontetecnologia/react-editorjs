import React, { Component } from "react";
import _EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import CheckList from "@editorjs/checklist";
import SimpleImage from "@editorjs/simple-image";
import Embed from "@editorjs/embed";
import Button from "@material-ui/core/Button";

const editor = new _EditorJS({
  /**
   * Id of Element that should contain Editor instance
   */
  holder: "editorjs",
  //   /**
  //    * Available Tools list.
  //    * Pass Tool's class or Settings object for each Tool you want to use
  //    */

  //   data: {
  //     time: 1552744582955,
  //     blocks: [
  //       {
  //         type: "image",
  //         data: {
  //           url: "https://img-9gag-fun.9cache.com/photo/aXYdK6g_700bwp.jpg"
  //         }
  //       }
  //     ],
  //     version: "2.11.10"
  //   },

  tools: {
    meuHeader: {
      class: Header,
      inlineToolbar: true
    },
    list: List,
    checklist: CheckList,
    image: SimpleImage,
    embed: Embed
  },

  /**
   * Enable autofocus
   */

  autofocus: true,

  onReady: () => {
    console.log("Editor.js is ready to work!");
  }
});

class EditorJS extends Component {
  save = () => {
    editor
      .save()
      .then(output => {
        console.log(output);
      })
      .catch(err => {});
  };

  render() {
    return (
      <>
        <div id="editorjs" />
        <Button size="small" color="primary" onClick={this.save}>
          Save
        </Button>
      </>
    );
  }
}

export default EditorJS;
