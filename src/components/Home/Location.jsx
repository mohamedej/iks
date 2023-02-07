import { Box, Center } from "@chakra-ui/react";
import React from "react";

function Location() {
  return (
    <Center mt={32}>
      hi
      <iframe width="600" height="450" loading="lazy" allowFullScreen
       src="https://www.google.com/maps/embed/v1/place?q=مدرسة+المعرفة+الدولية+فرع+تاجوراء،+Tajoura,+Libya&key=..." />
    </Center>
  );
}

export default Location;
