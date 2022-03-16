import * as React from "react";
import DonateForm from "../component/Donate";
import Hero from "../component/Hero";

interface IDonatePageProps {}

const DonatePage: React.FunctionComponent<IDonatePageProps> = (props) => {
  return (
    <>
      <Hero
        title="How can you help"
        description="Help contributing funds or supplies to our preschool for Ukrainian children so we can maintain the day to day expenses and increase capacity."
      />
      <DonateForm />
    </>
  );
};

export default DonatePage;
