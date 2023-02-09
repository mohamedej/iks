import { Box, Center, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import HeadlineWithSideLine from "../HeadlineWithSideLine";

function Information() {
  return (
    <Box mr={16}>
      <HStack mb={8} mt={24}>
        <Box w={[0.5, 1]} h={[4, 7]} bg="green" />
        <Text fontSize={[20, 24, 28, 32]} fontWeight="bold" color={"#3D3D3D"}>
          Contact Us
        </Text>
      </HStack>

      <Text fontSize={[12, 14, 16, 18]} color={"#008463"}>
        Wish to enquire about admissions, syllabus, or anything else? You can
        walk in during office hours, give us a call or simply submit the form
        here.
      </Text>
      <VStack align={"start"} spacing={8} mt={12}>
        <VStack align={"start"} spacing={2}>
          <HStack>
            <Box w={0.5} h={4} bg="green" />
            <Text fontSize={16} fontWeight="bold" color={"#3D3D3D"}>
              Phone
            </Text>
          </HStack>
          <HStack color={"#008463"}>
            <ImPhone />
            <Text>092-4440055</Text>
          </HStack>
        </VStack>
        <VStack align={"start"} spacing={2}>
          <HStack>
            <Box w={0.5} h={4} bg="green" />
            <Text fontSize={16} fontWeight="bold" color={"#3D3D3D"}>
              Email
            </Text>
          </HStack>
          <HStack color={"#008463"}>
            <MdEmail />
            <Text>info@ikstajoura.ly</Text>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
}

export default Information;
