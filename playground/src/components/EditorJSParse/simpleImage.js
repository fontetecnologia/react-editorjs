import React from "react";

import { renderText } from "./utils";

const styles = {
  imageDefault: {
    maxWidth: "100%",
    verticalAlign: "bottom"
  },
  imageWithBackground: {
    display: "block",
    maxWidth: "60%",
    margin: "0 auto"
  },
  imageStretched: {
    maxWidth: "none",
    width: "100%"
  },
  containerWithBorder: {
    border: "1px solid #e8e8eb",
    padding: "1px"
  },
  containerWithBackground: {
    background: "#eff2f5",
    padding: "10px"
  }
};

const SimpleImage = props => {
  const { caption, stretched, url, withBackground, withBorder } = props.data;

  function getImageStyle() {
    let imageStyle = styles.imageDefault;

    if (withBackground) {
      imageStyle = Object.assign(imageStyle, styles.imageWithBackground);
    }

    if (stretched) {
      imageStyle = Object.assign(imageStyle, styles.imageStretched);
    }

    return imageStyle;
  }

  function getContainerStyle() {
    let containerStyle = {};

    if (withBorder) {
      containerStyle = Object.assign(
        containerStyle,
        styles.containerWithBorder
      );
    }

    if (withBackground) {
      containerStyle = Object.assign(
        containerStyle,
        styles.containerWithBackground
      );
    }

    return containerStyle;
  }

  function renderImage() {
    return (
      <div style={getContainerStyle()}>
        <img src={url} alt={caption} style={getImageStyle()} />
        {caption.length > 0 && (
          <p dangerouslySetInnerHTML={renderText(caption)} />
        )}
      </div>
    );
  }

  return renderImage();
};

export default SimpleImage;
