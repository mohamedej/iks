import { Box, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import CircleCard from "../components/AboutUS/CircleCard";
import DividingLine from "../components/DividingLine";
import HeadlineWithSideLine from "../components/HeadlineWithSideLine";

function AboutUs() {
  return (
    <Box>
      <HeadlineWithSideLine headline={"Goals & Beliefs"} />
      <Text paddingX={20} my={12} fontSize={20}>
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
      <Text paddingX={20} my={12} fontSize={20}>
        Our school building is well equipped and up to date with excellent
        facilities such as a fully equipped science lab, a computer lab, a
        swimming pool, a library and various other important facilities and
        services to ensure that the learning environment meets our expectations.
      </Text>
      <VStack spacing={200} mt={36}>
        <Flex w="full" justifyContent={"space-evenly"}>
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
        </Flex>
        <DividingLine />
        <Flex w="full" justifyContent={"space-evenly"}>
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
        </Flex>
        <DividingLine />
        <Flex w="full" justifyContent={"space-evenly"}>
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
          <CircleCard
            picture={"url('/assets/home_hero.png')"}
            headline="INDOOR SWIMMING POOL"
          />
        </Flex>
      </VStack>
    </Box>
  );
}

export default AboutUs;
