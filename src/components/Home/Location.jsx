import { Box, Center } from "@chakra-ui/react";
import React from "react";

function Location() {
  return (
    <Center mt={[16, 24, 32]}>
      <Box
        as="iframe"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5318.366684526593!2d13.366486603709198!3d32.88861998710206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13a89be019b724e9%3A0x56c7a5749069b8c3!2z2YXYr9ix2LPYqSDYp9mE2YXYudix2YHYqSDYp9mE2K_ZiNmE2YrYqSDZgdix2Lkg2KrYp9is2YjYsdin2KE!5e0!3m2!1sar!2sly!4v1675850474516!5m2!1sar!2sly"
        width={["400px", "400px", "700px", "1000px"]}
        height={["200px", "200px", "350px", "500px"]}
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Center>
  );
}

export default Location;
