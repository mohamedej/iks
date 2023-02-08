import { Box, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import ContactForm from "../components/ContactUs/ContactForm";
import Information from "../components/ContactUs/Information";

function ContactUs() {
  return (
    <HStack minH="50vh" w={"full"} paddingX={24} mt={8} alignItems="start">
      <Flex flex="1">
        <Information />
      </Flex>
      <Flex justify={"center"} align="center">
        <Box
          h="600px"
          w="2px"
          bg={
            "linear-gradient(180deg, rgba(0,132,99,0) 0%, rgba(0,132,99,0.7483368347338936) 20%, rgba(0,132,99,1) 50%, rgba(0,132,99,0.7539390756302521) 80%, rgba(0,132,99,0) 100%)"
          }
        />
      </Flex>
      <Flex flex="3">
        <ContactForm />
      </Flex>
    </HStack>
  );
}

export default ContactUs;
