import React from "react";
import { renderText } from "./utils";

const Embed = props => {
  const { caption, embed, source, height, width } = props.data;

  function renderIFrame() {
    return (
      <div
        style={{
          margin: "0 auto"
        }}
      >
        <div style={{ textAlign: "center" }}>
          <iframe
            title={source}
            width={width}
            height={height}
            src={embed}
            frameBorder="0"
          />
        </div>

        {caption.length > 0 && (
          <div
            className="ce-paragraph"
            dangerouslySetInnerHTML={renderText(caption)}
          />
        )}
      </div>
    );
  }

  return renderIFrame();
};

export default Embed;
