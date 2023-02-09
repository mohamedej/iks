import { Box, Flex, HStack, useBreakpoint } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import Information from "../components/ContactUs/Information";

function ContactUs() {
  return (
    <Flex
      minH={["30vh", "50vh"]}
      w={"full"}
      paddingX={[10, 16, 24]}
      mt={[2, 4, 8]}
      alignItems="start"
      flexDir={["column", "column", "row"]}
    >
      <Flex flex="1">
        <Information />
      </Flex>
      <Flex justify={"center"} align="center" mt={[10, 24, 0]}>
        <Box
          h={["2px", "2px", "600px", "600px"]}
          w={["300px", "450px", "2px", "2px"]}
          bg={[
            `linear-gradient(90deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)`,
            `linear-gradient(90deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)`,
            `linear-gradient(180deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)`,
            `linear-gradient(180deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)`,
          ]}
        />
      </Flex>
      <Flex flex="3">
        <ContactForm />
      </Flex>
    </Flex>
  );
}

export default ContactUs;
