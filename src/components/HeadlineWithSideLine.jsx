import { Flex, Text, Box, HStack } from "@chakra-ui/react";
import React from "react";

function HeadlineWithSideLine({ headline }) {
  return (
    <HStack paddingX={[4, 8, 16]} mb={[8, 12, 16]} mt={[12, 20, 24]}>
      <Box w={["2px", "3px", "4px"]} h={[3, 5, 7]} bg="green" />
      <Text fontSize={[12, 24, 32]} fontWeight="bold" color={"#3D3D3D"}>
        {headline}
      </Text>
    </HStack>
  );
}

export default HeadlineWithSideLine;
