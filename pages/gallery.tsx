import * as React from "react";
import GalleryComponent from "../component/Gallery";
import Hero from "../component/Hero";
import { contentfulClient } from "../utils/contentful";

interface IGalleryPageProps {
  allImages: [];
}

export async function getStaticProps() {
  const allImages = await contentfulClient("gallery");
  return {
    props: { allImages },
  };
}

const GalleryPage: React.FunctionComponent<IGalleryPageProps> = ({
  allImages,
}) => {
  return (
    <>
      <Hero title="Gallery" />
      <GalleryComponent images={allImages} />
    </>
  );
};

export default GalleryPage;
