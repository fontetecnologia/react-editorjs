import React from "./node_modules/react";
import renderDangerouslyText from "../helpers/dangerouslyText";
import("./style.css");

const Quote = props => {
  const { alignment, caption, text } = props.data;

  function renderQuote() {
    return (
      <blockquote style={{ textAlign: alignment }} className="quotation">
        <p {...renderDangerouslyText(text)} />
        {caption.length > 0 && (
          <footer className="quotation-footer">
            <cite
              title={caption}
              {...renderDangerouslyText(caption)}
            />
          </footer>
        )}
      </blockquote>
    );
  }

  return renderQuote();
};

export default Quote;
