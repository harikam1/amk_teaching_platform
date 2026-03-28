import React, { useState } from "react";
import "./TiltedCard.css";

const TiltedCard = ({
  imageSrc,
  altText = "card",
  captionText,
  containerWidth = "300px",
  containerHeight = "300px",
  imageWidth = "100%",
  imageHeight = "100%",
  rotateAmplitude = 15,
  scaleOnHover = 1.05,
  displayOverlayContent = false,
  overlayContent,
}) => {
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * -rotateAmplitude;
    const rotateY = ((x / rect.width) - 0.5) * rotateAmplitude;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scaleOnHover})`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "rotateX(0deg) rotateY(0deg) scale(1)",
    });
  };

  return (
    <div
      className="tilted-card-container"
      style={{ width: containerWidth, height: containerHeight }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tilted-card" style={style}>
        <img
          src={imageSrc}
          alt={altText}
          style={{ width: imageWidth, height: imageHeight }}
        />

        {displayOverlayContent && (
          <div className="overlay">
            {overlayContent || <p>{captionText}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default TiltedCard;