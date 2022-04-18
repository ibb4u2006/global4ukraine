import { Box } from "@chakra-ui/react";
import * as React from "react";
import LocaleSwitcher from "../../../locale/LocaleSwitcher";

interface ILocaleMenuProps {
  closeMenu: () => void;
}

const LocaleMenu: React.FunctionComponent<ILocaleMenuProps> = ({
  closeMenu,
}) => {
  return <LocaleSwitcher />;
};

export default LocaleMenu;
