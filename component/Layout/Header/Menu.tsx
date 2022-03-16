import { Box, Button, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface IMenuToggleProps {
  toggle: React.MouseEventHandler;
  isOpen: boolean;
}

interface IMenuItemProps {
  isLast?: boolean;
  to: string;
}
interface IMenuProps {
  isOpen: boolean;
}

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

export const MenuToggle: React.FunctionComponent<IMenuToggleProps> = ({
  toggle,
  isOpen,
}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  children,
  isLast,
  to = "/",
  ...rest
}) => {
  return (
    <Button variant={"link"} size={"lg"}>
      <Link href={to}>
        <Text display="block" {...rest} color={"whiteAlpha.900"}>
          {children}
        </Text>
      </Link>
    </Button>
  );
};

const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/news">News</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/donate" isLast>
          <Button
            colorScheme={"yellow"}
            size="lg"
            rounded="md"
            bg={"secondary"}
            _hover={{
              bg: "yellow.600",
              color: "white",
            }}
          >
            Donate
          </Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default Menu;