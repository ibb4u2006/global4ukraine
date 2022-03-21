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
  closeMenu: () => void;
}
interface IMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
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
  closeMenu,
  ...rest
}) => {
  return (
    <Button
      variant={"link"}
      size={"lg"}
      display="block"
      {...rest}
      color={"whiteAlpha.900"}
      onClick={() => closeMenu()}
    >
      <Link href={to}>{children}</Link>
    </Button>
  );
};

const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen, closeMenu }) => {
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
        <MenuItem to="/" closeMenu={closeMenu}>
          Home
        </MenuItem>
        <MenuItem to="/about" closeMenu={closeMenu}>
          About
        </MenuItem>
        <MenuItem to="/news" closeMenu={closeMenu}>
          News
        </MenuItem>
        <MenuItem to="/donate" closeMenu={closeMenu} isLast>
          <Box
            py={3}
            px={5}
            rounded="md"
            bg={"secondary"}
            color={"veryDark"}
            _hover={{
              bg: "yellow.600",
              color: "white",
            }}
          >
            Donate
          </Box>
        </MenuItem>
      </Stack>
    </Box>
  );
};

export default Menu;
