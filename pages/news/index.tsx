import * as React from "react";
import Hero from "../../component/Hero";
import News from "../../component/news";
import { contentfulClient } from "../../utils/contentful";
import { useTranslation } from "next-i18next";
import { getServerSideTranslations } from "../../utils/translations";
import { NEWS } from "../../data/news";

interface INewsPageProps {
  allNewsList: [];
}

export async function getStaticProps({ locale }: any) {
  const allNewsList = await contentfulClient("blogPost");
  const translation = await getServerSideTranslations(locale, [
    "common",
    "home",
  ]);
  return {
    props: { allNewsList, ...translation },
  };
}

const NewsPage: React.FunctionComponent<INewsPageProps> = ({ allNewsList }) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("home:news-title")}
        donateBtnLabel={t("common:donate-button")}
        classStatus={t("common:class-status")}
      />
      <News data={NEWS} />
    </>
  );
};

export default NewsPage;
