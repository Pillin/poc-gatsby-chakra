import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { Link } from "gatsby";
const Header = ({}) => {
  return (
    <Flex align="center" justify="space-between" p="4">
      <Text>PlaylistHunt</Text>
      <Flex>
        <Button variant="ghost" as={Link} to={"/new"}>
          New
        </Button>
        <Button variant="ghost" as={Link}>
          Top
        </Button>
        <Button variant="solid" colorScheme="blue" as={Link}>
          SingUp
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
