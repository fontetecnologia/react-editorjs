import React from "react";
import renderDangerouslyText from "../helpers/dangerouslyText";

const SimpleImage = props => {
  const { caption, url, stretched, withBackground, withBorder } = props.data;

  let classNames = "cdx-simple-image__picture";

  if (withBorder) classNames += " cdx-simple-image__picture--with-border";

  if (withBackground)
    classNames += " cdx-simple-image__picture--with-background";

  if (stretched) classNames += " cdx-simple-image__picture--stretched";

  function renderImage() {
    return (
      <div className="cdx-simple-image">
        <div className={classNames}>
          <img src={url} alt={caption} />
          {caption.length > 0 && (
            <div
              className="ce-paragraph"
              {...renderDangerouslyText(caption)}
            />
          )}
        </div>
      </div>
    );
  }

  return renderImage();
};

export default SimpleImage;
