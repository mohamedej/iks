import { Box, Text } from "@chakra-ui/react";
import React from "react";

function CircleCard({ picture, headline }) {
  return (
    <Box
      h={[166, 244, 388]}
      w={[166, 244, 388]}
      bgImage={picture}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      position="relative"
      rounded="full"
      textAlign={"center"}
      my={[6, 2, 0]}
    >
      <Box
        bg={
          "linear-gradient(0deg, rgba(0,132,99,1) 0%, rgba(0,132,99,0.7315301120448179) 30%, rgba(0,132,99,0) 60%)"
        }
        h={[166, 244, 388]}
        w={[166, 244, 388]}
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
