import type { NextPage } from "next";
import SplitWithImage from "../component/Challenges";
import WithSpeechBubbles from "../component/Donors";
import Hero from "../component/Hero";
import NewsList from "../component/News";
import { contentfulClient } from "../utils/contentful";

interface IHomeProps {
  homeNewsList: [];
}

export async function getStaticProps() {
  const homeNewsList = await contentfulClient("blogPost");
  return {
    props: { homeNewsList },
  };
}

const Home: NextPage<IHomeProps> = ({ homeNewsList }) => {
  return (
    <>
      <Hero
        title="Global Preschool for the children of Ukraine"
        description="Ages 3-6 years "
      />
      <SplitWithImage />
      <WithSpeechBubbles />
      <NewsList data={homeNewsList} />
    </>
  );
};

export default Home;
