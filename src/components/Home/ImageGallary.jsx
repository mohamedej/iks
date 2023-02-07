import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ImageGallary() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <img
      src="/assets/logo.png"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
    <img src="path-to-img" onDragStart={handleDragStart} role="presentation" />,
  ];

  const Gallery = () => {
    return <AliceCarousel mouseTracking items={items} />;
  };
}
