import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import SplitWithImage from "../component/Challenges";
import WithSpeechBubbles from "../component/Donors";
import Hero from "../component/Hero";
import NewsSection from "../component/News";

const Home: NextPage = () => {
  return (
    <>
      <Hero
        title="Global preschool for Ukraine"
        description="Ages 3-6 years "
      />
      <SplitWithImage />
      <WithSpeechBubbles />
      <NewsSection />
    </>
  );
};

export default Home;
