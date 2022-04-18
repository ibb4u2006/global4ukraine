import * as React from "react";
import Donate from "../component/Donate";
import Hero from "../component/Hero";
import { getServerSideTranslations } from "../utils/translations";
import { useTranslation } from "next-i18next";
import { DETAILS } from "../data/about";

interface IDonatePageProps {}

export async function getStaticProps({ locale }: any) {
  const translation = await getServerSideTranslations(locale, [
    "common",
    "about",
    "donate",
  ]);
  return {
    props: { ...translation },
  };
}

const DonatePage: React.FunctionComponent<IDonatePageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("donate:title")}
        description={t("donate:description")}
        noDonateBtn
      />
      <Donate
        sendDonation={t("donate:send-donation")}
        sendDescription={t("donate:send-description")}
        details={DETAILS}
      />
    </>
  );
};

export default DonatePage;
