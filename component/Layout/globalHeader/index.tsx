import * as React from "react";
import Logo from "./Logo";
import Menu from "./menu";
import MenuToggle from "./menu/ToggleMenu";
import NavBar from "./NavBar";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <NavBar {...props}>
      <Logo color={["white", "white", "primary.500", "primary.500"]} />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <Menu isOpen={isOpen} closeMenu={closeMenu} />
    </NavBar>
  );
};

export default Header;
