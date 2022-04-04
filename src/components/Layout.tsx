import { Grid, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./Header";

const Layout = (props: { children: any }) => {
  return (
    <Grid gridTemplateRows="64px auto" minHeight="100vh">
      <Header />
      <Flex justify="center">{props.children}</Flex>
      <Flex as="footer" align="center" justify="center" color="gray.400">
        All Rights Reserved
      </Flex>
    </Grid>
  );
};

export default Layout;
