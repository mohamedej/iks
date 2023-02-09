import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import CircleCard from "../components/AboutUS/CircleCard";
import DividingLine from "../components/DividingLine";
import HeadlineWithSideLine from "../components/HeadlineWithSideLine";

function AboutUs() {
  return (
    <Box>
      <HeadlineWithSideLine headline={"Goals & Beliefs"} />
      <Text paddingX={[10, 20]} my={[6, 12]} fontSize={[10, 12, 18, 20]}>
        We believe that our main goal is to develop our student’s gifts and
        talents within the classroom and even beyond. We focus not only helping
        our students achieve the highest academic standards, but also to be
        ambitious, confident individuals. At T.IKS we believe that the key to
        achieving success within the school environment is promoting mutual
        respect, being determined, giving others what you hope to receive and
        always trying your best.
      </Text>
      <DividingLine />
      <HeadlineWithSideLine headline={"School Facilities"} />
      <Text paddingX={[10, 20]} my={[6, 12]} fontSize={[10, 12, 18, 20]}>
        Our school building is well equipped and up to date with excellent
        facilities such as a fully equipped science lab, a computer lab, a
        swimming pool, a library and various other important facilities and
        services to ensure that the learning environment meets our expectations.
      </Text>
      <VStack spacing={[46, 92, 200]} mt={[24, 36]}>
        <Flex
          w="full"
          h={"full"}
          justifyContent={["center", "space-evenly"]}
          align="center"
          flexDir={["column", "column", "row"]}
        >
          <CircleCard
            picture={"url('/assets/lab.jpg')"}
            headline="MODERN SCIENCE 
            LABORATORY"
          />
          <CircleCard
            picture={"url('/assets/theater.jpg')"}
            headline="STATE OF THE ART
            THEATER"
          />
        </Flex>
        <DividingLine />
        <Flex
          w="full"
          h={"full"}
          justifyContent={["center", "space-evenly"]}
          align="center"
          flexDir={["column", "column", "row"]}
        >
          <CircleCard
            picture={"url('/assets/pool.jpg')"}
            headline="INDOOR SWIMMING POOL"
          />
          <CircleCard
            picture={"url('/assets/sport.jpg')"}
            headline="VERSATILE SPORTS
            FACILITIES"
          />
        </Flex>
        <DividingLine />
        <Flex
          w="full"
          h={"full"}
          justifyContent={["center", "space-evenly"]}
          align="center"
          flexDir={["column", "column", "row"]}
        >
          <CircleCard
            picture={"url('/assets/computer.jpg')"}
            headline="COMPUTER LAB"
          />
          <CircleCard
            picture={"url('/assets/kitchen.jpg')"}
            headline="FULLY EQUIPPED KITCHEN"
          />
        </Flex>
      </VStack>
    </Box>
  );
}

export default AboutUs;
