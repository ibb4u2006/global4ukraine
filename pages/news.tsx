import * as React from "react";
import NewsList from "../component/News";

interface INewsPageProps {}

const NewsPage: React.FunctionComponent<INewsPageProps> = (props) => {
  return <NewsList />;
};

export default NewsPage;
