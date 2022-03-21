import type { NextPage } from "next";
import SplitWithImage from "../component/Challenges";
import Donors from "../component/Donors";
import Hero from "../component/Hero";
import NewsList from "../component/news/NewsSlider";
import Partners from "../component/Partners";
import { PARTNERS } from "../data/partners";
import { contentfulClient } from "../utils/contentful";

interface IHomeProps {
  homeNewsList: [];
  homeDonorsList: [];
}

export async function getStaticProps() {
  const homeNewsList = await contentfulClient("blogPost");
  const homeDonorsList = await contentfulClient("donors");
  return {
    props: { homeNewsList, homeDonorsList },
  };
}

const Home: NextPage<IHomeProps> = ({ homeNewsList, homeDonorsList }) => {
  return (
    <>
      <Hero
        title="Global Preschool for the children of Ukraine"
        description="Ages 3-6 years "
      />
      <SplitWithImage
        logo={{
          url: "https://globalpreschool.cz/",
          src: "../img/preschool-logo.png",
        }}
        title="Global Preschool for the children of Ukraine"
        subTitle="About us"
        image="../img/about-global.jpeg"
        description="We are a well established preschool in Prague, Czech Republic offering early childhood learning for young children from Ukraine. Most Czech preschools are full and cannot meet the demands of mothers who are seeking to find work. We saw an urgent need in the community and decided to step in and help."
        aboutBtn
      />
      <Partners partnerData={PARTNERS} />
      {/* <Donors data={homeDonorsList} /> */}
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
