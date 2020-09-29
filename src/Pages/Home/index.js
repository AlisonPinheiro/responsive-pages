import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { homeObjeOne } from "../../Data/homeData";

function Home() {
  return (
    <>
      <Section {...homeObjeOne} />
      <Pricing />
    </>
  );
}

export default Home;
