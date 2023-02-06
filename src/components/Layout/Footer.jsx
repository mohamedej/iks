import {
  Box,
  Center,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { IoMdPin } from "react-icons/io";

function Footer() {
  return (
    <Flex
      position="absolute"
      bottom={0}
      bgImage="url('/assets/bg.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      boxShadow={"inset 0 0 0 1000px rgba(0,132,99,.9)"}
      w="full"
      spacing={6}
      direction="column"
      padding={4}
    >
      <Flex w="full" paddingX={16} align="center">
        <Image w={52} src="/assets/logo2.png" />
        <HStack ml="30%" spacing={12} align="start" h={20}>
          <VStack direction={"column"} color="white" align={"start"}>
            <Text fontWeight="bold">Contact Info</Text>
            <HStack>
              <ImPhone />
              <Text>092-4440055</Text>
            </HStack>
            <HStack>
              <MdEmail />
              <Text>info@ikstajoura.ly</Text>
            </HStack>
          </VStack>
          <VStack direction={"column"} color="white" align={"start"}>
            <Text fontWeight="bold">Working hours</Text>
            <HStack>
              <BiTimeFive />
              <Text>7:00 AM - 3:00 PM</Text>
            </HStack>
            <HStack>
              <AiTwotoneCalendar />
              <Text>Closed in Fridays & Saturdays</Text>
            </HStack>
          </VStack>
          <VStack direction={"column"} color="white" align={"start"}>
            <Text fontWeight="bold">Address</Text>
            <HStack>
              <IoMdPin />
              <Text>Tajoura, Tripoli</Text>
            </HStack>
          </VStack>
        </HStack>
      </Flex>
      <Center color="white" fontWeight="bold" mb={2} mt={4}>
        Copyright © 2023 IKSTajoura | Powered by IKS group.
      </Center>
    </Flex>
  );
}

export default Footer;
