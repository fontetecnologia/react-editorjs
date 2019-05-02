import React from "react";
import { renderText } from "./utils";

const Embed = props => {
  const { caption, embed, height, width } = props.data;

  function renderIFrame() {
    return (
      <div>
        <iframe
          id={Date.now()}
          key={Date.now()}
          title={Date.now()}
          width={width}
          height={height}
          src={embed}
          frameborder="0"
        />

        {caption.length > 0 && (
          <p dangerouslySetInnerHTML={renderText(caption)} />
        )}
      </div>
    );
  }

  return renderIFrame();
};

export default Embed;
