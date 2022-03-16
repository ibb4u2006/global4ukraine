import Colors from "./colors";
import * as styledComponents from "styled-components";
import * as Breakpoints from "./breakpoints";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const chakraConfig: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const Theme = extendTheme({
  colors: {
    ...Colors,
  },
});

const {
  default: styled,
  css,
  ThemeProvider,
  createGlobalStyle,
} = styledComponents as any;

export {
  chakraConfig,
  css,
  Theme,
  ThemeProvider,
  createGlobalStyle,
  Breakpoints,
};
export default styled;
