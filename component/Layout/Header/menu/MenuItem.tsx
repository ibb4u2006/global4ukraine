import { Button } from "@chakra-ui/react";
import Link from "next/link";

interface IMenuItemProps {
  to: string;
  isButton?: boolean;
  closeMenu: () => void;
}

const MenuItem: React.FunctionComponent<IMenuItemProps> = ({
  children,
  to = "/",
  isButton,
  closeMenu,
  ...rest
}) => {
  return (
    <Button
      variant={"link"}
      size={"lg"}
      display="block"
      {...rest}
      onClick={() => closeMenu()}
      p={isButton ? 3 : 0}
      rounded={isButton ? "md" : ""}
      bg={isButton ? "secondary" : ""}
      color={isButton ? "veryDark" : "whiteAlpha.900"}
      _hover={
        isButton
          ? {
              bg: "yellow.600",
              color: "white",
            }
          : {}
      }
    >
      <Link href={to}>{children}</Link>
    </Button>
  );
};

export default MenuItem;
