import * as React from "react";
import Donate from "../component/Donate";
import DonateForm from "../component/Donate";
import Hero from "../component/Hero";

interface IDonatePageProps {}

const DonatePage: React.FunctionComponent<IDonatePageProps> = (props) => {
  return (
    <>
      <Hero
        title="How you can help"
        description="Help contribute funds or supplies to our preschool for Ukrainian children so that we can support the day to day expenses and increase capacity."
        noDonateBtn
      />
      <Donate />
    </>
  );
};

export default DonatePage;
