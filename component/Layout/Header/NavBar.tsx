import { Flex } from "@chakra-ui/react";
import * as React from "react";

interface INavBarProps {}

const NavBar: React.FunctionComponent<INavBarProps> = ({
  children,
  ...props
}) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      wrap="wrap"
      w="100%"
      p={8}
      bg={"primary"}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
