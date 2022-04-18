import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme, ThemeProvider } from "../theme";
import GlobalStyle from "../styles/gobal";
import SimpleReactLightbox from "simple-react-lightbox";
import { appWithTranslation } from "next-i18next";
import Head from "next/head";
import { useTranslation } from "next-i18next";
import { getServerSideTranslations } from "../utils/translations";
import Layout from "../component/Layout";

export async function getStaticProps({ locale }: any) {
  const translation = await getServerSideTranslations(locale, [
    "common",
    "home",
  ]);
  return {
    props: { ...translation },
  };
}

function MyApp({ Component, pageProps }: AppProps) {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t("common:hero-title")}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content={t("common:hero-title")}
          key={t("common:hero-title")}
        />
        <meta
          property="og:description"
          content={t("common:meta-description")}
          key={t("common:meta-description")}
        />
      </Head>
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
    </>
  );
}

export default appWithTranslation(MyApp);
