import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme, ThemeProvider } from "../theme";
import Layout from "../component/Layout";
import GlobalStyle from "../styles/gobal";
import SimpleReactLightbox from "simple-react-lightbox";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={Theme}>
      <ChakraProvider theme={Theme}>
        <GlobalStyle />
        <Layout>
          <SimpleReactLightbox>
            <Component {...pageProps} />
          </SimpleReactLightbox>
        </Layout>
      </ChakraProvider>
    </ThemeProvider>
  );
}

export default MyApp;
