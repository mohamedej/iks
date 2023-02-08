import { Box, Text } from "@chakra-ui/react";
import React from "react";

function CircleCard({ picture, headline }) {
  return (
    <Box
      h={388}
      w={388}
      bgImage={picture}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      rounded="full"
      textAlign={"center"}
    >
      <Box
        bg={
          "linear-gradient(0deg, rgba(0,132,99,1) 0%, rgba(0,132,99,0.7315301120448179) 30%, rgba(0,132,99,0) 60%)"
        }
        h={388}
        w="388px"
        position="absolute"
        bottom="0"
        rounded="full"
      />
      <Text
        position="absolute"
        bottom="70"
        w="inherit"
        color="white"
        fontWeight={"bold"}
        textAlign={"center"}
        fontSize="16px"
      >
        {headline}
      </Text>
    </Box>
  );
}

export default CircleCard;
