import { Box, Button, Center, Flex, HStack, Image } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
  let location = useLocation();
  let path = location.pathname;
  return (
    <Box mb={12}>
      <Flex
        justifyContent="space-between"
        paddingX={[2, 4, 8]}
        align={"center"}
      >
        <Image
          src="/assets/logo1.png"
          marginY={[-16, -20, -28]}
          w={[200, 250, 320, 340]}
        />
        <Center bg="#008463" h={[10, 12]} w={[10, 12]} rounded="full">
          <Link to="https://www.facebook.com/profile.php?id=100083014584676">
            <Image
              w={[6, 8]}
              _hover={{ w: 9 }}
              transition="width .3s"
              src="/assets/facebook.svg"
            />
          </Link>
        </Center>
      </Flex>
      <HStack
        bg={"#008463"}
        padding="3"
        spacing={[4, 8, 12]}
        justifyContent="center"
        fontWeight="bold"
      >
        <Button
          as={Link}
          to="/"
          rounded="3xl"
          color={path === "/" ? "#008463" : "white"}
          variant={path === "/" ? "solid" : "link"}
          size={["sm", "md"]}
        >
          Home
        </Button>
        <Button
          as={Link}
          to="/AboutUs"
          rounded="3xl"
          color={path === "/AboutUs" ? "#008463" : "white"}
          variant={path === "/AboutUs" ? "solid" : "link"}
          size={["sm", "md"]}
        >
          About Us
        </Button>
        <Button
          as={Link}
          to="/ContactUs"
          rounded="3xl"
          color={path === "/ContactUs" ? "#008463" : "white"}
          variant={path === "/ContactUs" ? "solid" : "link"}
          size={["sm", "md"]}
        >
          Contact Us
        </Button>
      </HStack>
    </Box>
  );
}

export default Header;
