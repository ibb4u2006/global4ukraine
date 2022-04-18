import type { NextPage } from "next";
import SplitWithImage from "../component/Challenges";
import Hero from "../component/Hero";
import NewsList from "../component/news/NewsSlider";
import Partners from "../component/Partners";
import { PARTNERS } from "../data/partners";
import { contentfulClient } from "../utils/contentful";
import { useTranslation } from "next-i18next";
import { CHALLENGES } from "../data/challenges";
import { getServerSideTranslations } from "../utils/translations";
import { NEWS } from "../data/news";

interface IHomeProps {
  homeNewsList: [];
  homeDonorsList: [];
}

export async function getStaticProps({ locale }: any) {
  const homeNewsList = await contentfulClient("blogPost");
  const homeDonorsList = await contentfulClient("donors");
  const translation = await getServerSideTranslations(locale, [
    "common",
    "home",
  ]);
  return {
    props: { homeNewsList, homeDonorsList, ...translation },
  };
}

const Home: NextPage<IHomeProps> = ({ homeNewsList, homeDonorsList }) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("common:hero-title")}
        description={t("common:hero-description")}
        donateBtnLabel={t("common:donate-button")}
        classStatus={t("common:class-status")}
      />
      <SplitWithImage
        logo={{
          url: "https://globalpreschool.cz/",
          src: "../img/preschool-logo.png",
        }}
        title={t("home:about-title")}
        subTitle={t("common:about-menu")}
        image="../img/about-global.jpeg"
        description={t("home:about-description")}
        aboutBtnLabel={t("home:about-button")}
      />
      <Partners
        partnerHeading={t("home:partners-title")}
        partnerData={PARTNERS}
      />
      <NewsList
        data={NEWS}
        newsHeading={t("home:news-title")}
        newsBtnLabel={t("home:news-button")}
      />
      <SplitWithImage
        title={t("home:challenges-title")}
        subTitle={t("home:challenges-tag")}
        image="../img/ukraine-child.jpg"
        description={t("home:challenges-description")}
        lists={CHALLENGES}
      />
    </>
  );
};

export default Home;
