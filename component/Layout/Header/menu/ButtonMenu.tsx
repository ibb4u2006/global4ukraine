import { Box } from "@chakra-ui/react";
import * as React from "react";

interface IButtonMenuProps {
  label: string;
}

const ButtonMenu: React.FunctionComponent<IButtonMenuProps> = ({ label }) => {
  return (
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
      {label}
    </Box>
  );
};

export default ButtonMenu;
