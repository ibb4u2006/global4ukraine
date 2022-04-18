import { Box, Heading } from "@chakra-ui/react";
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
        <Heading color={"white"}>Global for Ukraine</Heading>
      </Link>
    </Box>
  );
};

export default Logo;
