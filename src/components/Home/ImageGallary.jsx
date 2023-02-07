import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default function ImageGallary() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <AspectRatio ratio={16 / 9}>
      <video width="100%" height="600px" autoPlay controls loop>
        <source src="/assets/promo.mp4" type="video/mp4" />
      </video>
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/home_hero.png"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <Image
      src="/assets/home_hero.png"
      onDragStart={handleDragStart}
      style={{ width: "100%", objectFit: "contain" }}
    />,
    <Image
      src="/assets/home_hero.png"
      onDragStart={handleDragStart}
      style={{ width: "100%", objectFit: "contain" }}
    />,
  ];

  return (
    <Box padding={48}>
      <AliceCarousel mouseTracking items={items} />
    </Box>
  );
}
