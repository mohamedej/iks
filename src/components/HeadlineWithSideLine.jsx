import { Flex, Text, Box, HStack } from "@chakra-ui/react";
import React from "react";

function HeadlineWithSideLine({ headline }) {
  return (
    <HStack paddingX={16} mb={12} mt={24}>
      <Box w={1} h={7} bg="green" />
      <Text fontSize={32} fontWeight="bold" color={"#3D3D3D"}>
        {headline}
      </Text>
    </HStack>
  );
}

export default HeadlineWithSideLine;
