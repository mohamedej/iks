import { Box, Center } from "@chakra-ui/react";
import React from "react";

function DividingLine() {
  return (
    <Center mt={[16, 24, 32]}>
      <Box
        h="2px"
        w={["300px", "500px", "700px"]}
        bg={
          "linear-gradient(90deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)"
        }
      />
    </Center>
  );
}

export default DividingLine;
