import * as React from "react";
import Hero from "../../component/Hero";
import {
  client as clientDetails,
  contentfulClient,
} from "../../utils/contentful";

interface INewsDetailProps {
  news: any;
}

export const getStaticPaths = async () => {
  const newsDetail = await contentfulClient("blogPost");
  const paths = newsDetail.map((item: any) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }: any) {
  const { items } = await clientDetails.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });
  return {
    props: { news: items[0] },
  };
}

const NewsDetail: React.FunctionComponent<INewsDetailProps> = ({ news }) => {
  const { title, description, heroImage } = news.fields;
  return (
    <>
      <Hero
        title={title}
        description={description}
        heroImg={`https:${heroImage.fields.file.url}`}
      />
    </>
  );
};

export default NewsDetail;
