import React from "react";
import { renderText } from "../utils";
import("./style.css");

const Quote = props => {
  const { alignment, caption, text } = props.data;

  function renderQuote() {
    return (
      <blockquote style={{ textAlign: alignment }} className="quotation">
        <p dangerouslySetInnerHTML={renderText(text)} />
        {caption.length > 0 && (
          <footer className="quotation-footer">
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
