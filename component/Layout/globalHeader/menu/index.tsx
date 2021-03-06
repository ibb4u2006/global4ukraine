import { Box, Stack } from "@chakra-ui/react";
import * as React from "react";
import LocaleMenu from "./LocaleMenu";
import { MENU } from "../../../../data/header";
import { useTranslation } from "next-i18next";
import MenuItem from "./MenuItem";

interface IMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const Menu: React.FunctionComponent<IMenuProps> = ({ isOpen, closeMenu }) => {
  const { t } = useTranslation();
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
        {MENU.map((menu) => {
          return (
            <MenuItem
              key={menu.id}
              to={menu.to}
              closeMenu={closeMenu}
              isButton={menu.isButton}
            >
              {t(menu.label)}
            </MenuItem>
          );
        })}
        <LocaleMenu closeMenu={closeMenu} />
      </Stack>
    </Box>
  );
};

export default Menu;
