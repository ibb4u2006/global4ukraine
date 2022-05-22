import { useTranslation } from "next-i18next";
import * as React from "react";
import Logo from "./Logo";
import Menu from "./menu";
import MenuToggle from "./menu/ToggleMenu";
import NavBar from "./NavBar";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation();
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <NavBar {...props}>
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
      <em>{t("common:nav-slogan")}</em>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
    </NavBar>
  );
};

export default Header;
