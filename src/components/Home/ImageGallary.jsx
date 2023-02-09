import { AspectRatio, Box, Image } from "@chakra-ui/react";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 1 },
};

export default function ImageGallary() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <video width="100%" height={["200px"]} autoPlay controls loop>
      <source src="/assets/promo.mp4" type="video/mp4" />
    </video>,
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
    <Box padding={[4, 16, 32]} my={[8, 4, 0]}>
      <AliceCarousel mouseTracking items={items} responsive />
    </Box>
  );
}
