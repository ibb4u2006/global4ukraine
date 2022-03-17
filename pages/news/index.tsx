import * as React from "react";
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
  return <NewsList data={allNewsList} />;
};

export default NewsPage;
