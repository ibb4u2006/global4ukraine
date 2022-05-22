import { Box, Image } from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";

interface ILogoProps {
  w?: any;
  color?: any;
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
    <Box {...props} cursor={"pointer"}>
      <Link href={"/"}>
        <Image src="./img/logo.png" alt="logo" width={["100px", "200px"]} />
      </Link>
    </Box>
  );
};

export default Logo;
