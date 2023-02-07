import { Box,  Text } from "@chakra-ui/react";
import React from "react";

function CircleCard({picture, headline}) {
  return (

      <Box
        h={388}
        w={388}
        bgImage={picture}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        position="relative"
        rounded='full'
        textAlign={'center'}
      >
        <Box
          bg={
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.25) 30.21%, #008463 100%);"
          }
          h={388}
          w="388px"
          position="absolute"
          bottom="0"
          rounded='full'

        />
        <Text
          position="absolute"
          bottom="70"
          w='inherit'
          color="white"
          fontWeight={"bold"}
          textAlign={'center'}
          fontSize="18px"
        >
          {headline}
        </Text>
      </Box>
  );
}

export default CircleCard;
