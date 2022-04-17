import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface IItemMenuProps {
  to: string;
  closeMenu: () => void;
}

const ItemMenu: React.FunctionComponent<IItemMenuProps> = ({
  children,
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

export default ItemMenu;
