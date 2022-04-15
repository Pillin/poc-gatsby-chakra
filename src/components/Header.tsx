import React from "react";
import {
  Button,
  Flex,
  Text,
  MenuButton,
  Menu,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { useAuth0 } from "../hooks/useAuth0";
import ClientOnly from "./ClientOnly";

const Header = ({}) => {
  const { login, logout, isAuthenticated, user } = useAuth0();
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

        <ClientOnly>
          {isAuthenticated ? (
            <Menu>
              <MenuButton as={Button} leftIcon="chevron-down">
                Profile
              </MenuButton>
              <MenuList>
                <MenuItem isDisabled>{user?.email}</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <Button
              variant="solid"
              colorScheme="blue"
              fontWeight="bold"
              onClick={login}
            >
              Sign Up
            </Button>
          )}
        </ClientOnly>
      </Flex>
    </Flex>
  );
};

export default Header;
