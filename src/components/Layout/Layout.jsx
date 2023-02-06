import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }) {
  return (
    <Flex minH={"100vh"} fontFamily="cairo" direction={"column"}>
      <Header />
      {children}
      <Footer />
    </Flex>
  );
}

export default Layout;
