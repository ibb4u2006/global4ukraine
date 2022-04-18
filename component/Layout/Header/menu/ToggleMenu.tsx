import { Box } from "@chakra-ui/react";
import { CloseIcon, MenuIcon } from "./Icons";

interface IMenuToggleProps {
  toggle: React.MouseEventHandler;
  isOpen: boolean;
}

const MenuToggle: React.FunctionComponent<IMenuToggleProps> = ({
  toggle,
  isOpen,
}) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

export default MenuToggle;
