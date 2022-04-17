import * as React from "react";
import Hero from "../../component/Hero";
import { NEWS } from "../../data/news";
import { useTranslation } from "next-i18next";
import { getServerSideTranslations } from "../../utils/translations";

interface INewsDetailProps {
  news: any;
}

export const getStaticPaths = async ({ locales }: any) => {
  const paths = NEWS.map((item: any) =>
    locales.map((locale: any) => ({ params: { slug: item.slug }, locale }))
  ).flat();
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params, locale }: any) {
  const news = NEWS.find((news) => news.slug === params.slug);
  const translation = await getServerSideTranslations(locale, [
    "common",
    "home",
  ]);
  return {
    props: { news, ...translation },
  };
}

const NewsDetail: React.FunctionComponent<INewsDetailProps> = ({ news }) => {
  const { t } = useTranslation();
  const { title, description, img } = news;
  return (
    <>
      <Hero
        title={t(title)}
        description={t(description)}
        donateBtnLabel={t("common:donate-button")}
        classStatus={t("common:class-status")}
        heroImg={img}
      />
    </>
  );
};

export default NewsDetail;
