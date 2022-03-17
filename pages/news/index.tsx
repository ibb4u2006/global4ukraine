import * as React from "react";
import Hero from "../../component/Hero";
import NewsList from "../../component/News";
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
      <Hero
        title="Global Preschool for the children of Ukraine"
        description="Ages 3-6 years"
      />
      <NewsList data={allNewsList} />
    </>
  );
};

export default NewsPage;
