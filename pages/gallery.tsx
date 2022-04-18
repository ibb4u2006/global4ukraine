import * as React from "react";
import GalleryComponent from "../component/Gallery";
import Hero from "../component/Hero";
import { contentfulClient } from "../utils/contentful";
import { getServerSideTranslations } from "../utils/translations";
import { useTranslation } from "next-i18next";

interface IGalleryPageProps {
  allImages: [];
}

export async function getStaticProps({ locale }: any) {
  const allImages = await contentfulClient("gallery");
  const translation = await getServerSideTranslations(locale, ["common"]);
  return {
    props: { allImages, ...translation },
  };
}

const GalleryPage: React.FunctionComponent<IGalleryPageProps> = ({
  allImages,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Hero
        title={t("common:gallery-menu")}
        donateBtnLabel={t("common:donate-button")}
        classStatus={t("common:class-status")}
      />
      <GalleryComponent images={allImages} />
    </>
  );
};

export default GalleryPage;
