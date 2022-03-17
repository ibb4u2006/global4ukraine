import type { NextPage } from "next";
import { title } from "process";
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
      <SplitWithImage
        title="About Global Preschool"
        subTitle="About us"
        image="../img/preschool-grad.jpeg"
        description="We are a well established preschool in Prague, Czech Republic offering early childhood learning for young children from Ukraine. Most Czech preschools are full and cannot meet the demand of mothers who are seeking to find work. We saw an urgent need in the community and decided to step in and help."
        aboutBtn
      />
      <WithSpeechBubbles />
      <NewsList data={homeNewsList} newsBtn />
      <SplitWithImage
        title="What are the challenges for children who have fled the conflict in Ukraine?"
        subTitle="Challenges"
        image="../img/ukraine-child.jpg"
        description="Many children in Ukraine have already witnessed or experienced
        acts of violence over eight years of conflict."
        lists
      />
    </>
  );
};

export default Home;
