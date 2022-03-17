import * as React from "react";
import GridListWithHeading from "../component/About";
import Hero from "../component/Hero";

interface IAboutPageProps {}

const AboutPage: React.FunctionComponent<IAboutPageProps> = (props) => {
  return (
    <>
      <Hero
        title="Global Preschool for Ukraine"
        description="Ages 3-6 years "
      />
      <GridListWithHeading />
    </>
  );
};

export default AboutPage;
