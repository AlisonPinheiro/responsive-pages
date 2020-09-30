import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { homeObjeOne, homeObjeTwo } from "../../Data/homeData";

function Home() {
  return (
    <>
      <Section {...homeObjeOne} />
      <Pricing />
      <Section {...homeObjeTwo} />
    </>
  );
}

export default Home;
