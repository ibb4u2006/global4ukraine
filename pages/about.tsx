import * as React from "react";
import GridListWithHeading from "../component/About";
import Hero from "../component/Hero";
import { useTranslation } from "next-i18next";
import { getServerSideTranslations } from "../utils/translations";
import { ABOUT, DETAILS, OUTCOMES } from "../data/about";

interface IAboutPageProps {}

export async function getStaticProps({ locale }: any) {
  const translation = await getServerSideTranslations(locale, [
    "common",
    "about",
  ]);
  return {
    props: { ...translation },
  };
}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("common:hero-title")}
        description={t("common:hero-description")}
        donateBtnLabel={t("common:donate-button")}
        classStatus={t("common:class-status")}
      />
      <GridListWithHeading
        title={t("common:about-menu")}
        paragraphs={ABOUT}
        listTitle={t("about:outcome-title")}
        listDescription={t("about:outcome-description")}
        lists={OUTCOMES}
        detailsTitle={t("about:help-title")}
        detailsDescription={t("about:help-description")}
        detailsList={DETAILS}
      />
    </>
  );
};

export default AboutPage;
