import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import DividingLine from "../components/DividingLine";
import HeadlineWithSideLine from "../components/HeadlineWithSideLine";
import ImageGallary from "../components/Home/ImageGallary";

function Home() {
  return (
    <Box>
      <Box
        h={570}
        bgImage="url('/assets/home_hero.png')"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
      >
        <Box
          bg={
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.25) 30.21%, #008463 100%);"
          }
          h={175}
          w="full"
          position="absolute"
          bottom="0"
        />
        <Text
          position="absolute"
          bottom="35"
          ml={16}
          color="white"
          fontWeight={"bold"}
          fontSize="48px"
        >
          International Knowledge School
        </Text>
      </Box>
      <HeadlineWithSideLine headline={"Overview"} />
      <Text paddingX={20} my={12} fontSize={20}>
        Tajoura International Knowledge School is delighted to welcome you. Our
        outstanding school offers pre-primary, primary and secondary education
        in one of our latest branches based in Tripoli. T.IKS school is part of
        the IKS family. We have two departments: the international department
        which teaches an English curriculum and the Arabic department that
        teaches the Libyan curriculum.
      </Text>
      <DividingLine />
      <ImageGallary />
    </Box>
  );
}

export default Home;
