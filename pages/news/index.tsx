import * as React from "react";
import Hero from "../../component/Hero";
import News from "../../component/news";
import { contentfulClient } from "../../utils/contentful";

interface INewsPageProps {
  allNewsList: [];
}

export async function getStaticProps() {
  const allNewsList = await contentfulClient("blogPost");
  return {
    props: { allNewsList },
  };
}

const NewsPage: React.FunctionComponent<INewsPageProps> = ({ allNewsList }) => {
  return (
    <>
      <Hero title="Latest News" />
      <News data={allNewsList} />
    </>
  );
};

export default NewsPage;
