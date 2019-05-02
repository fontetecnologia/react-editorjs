import React from "react";
import { renderText } from "./utils";

const Quote = props => {
  const { alignment, caption, text } = props.data;

  function renderQuote() {
    return (
      <blockquote style={{ textAlign: alignment, border: "1px solid #e8e8eb" }}>
        <p dangerouslySetInnerHTML={renderText(text)} />
        {caption.length > 0 && (
          <footer style={{ textAlign: "right" }}>
            <cite
              title={caption}
              dangerouslySetInnerHTML={renderText(caption)}
            />
          </footer>
        )}
      </blockquote>
    );
  }

  return renderQuote();
};

export default Quote;
