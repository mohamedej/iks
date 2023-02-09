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
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const items = [
    <video width="100%" height={["200px"]} autoPlay controls loop>
      <source src="/assets/promo.mp4" type="video/mp4" />
    </video>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/1.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/2.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/3.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/4.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/5.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/6.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/7.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/8.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
    <AspectRatio ratio={16 / 9}>
      <Image
        src="/assets/9.jpg"
        onDragStart={handleDragStart}
        style={{ width: "100%", objectFit: "contain" }}
      />
    </AspectRatio>,
  ];

  return (
    <Box padding={[4, 16, 32]} my={[8, 4, 0]}>
      <AliceCarousel mouseTracking items={items} responsive />
    </Box>
  );
}
