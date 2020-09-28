import React from "react";
import Section from "../../Components/Section";
import { homeObjeOne } from "../../Services/Data";

function Home() {
  return (
    <>
      <Section {...homeObjeOne} />
    </>
  );
}

export default Home;
