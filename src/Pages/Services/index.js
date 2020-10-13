import React from "react";
import Pricing from "../../Components/Pricing";
import Section from "../../Components/Section";
import { servicesObj } from "../../Data/servicesData";
import { homeObjeOne } from "../../Data/homeData";
import TitlePage from "../../Components/TitlePage";

import "./Services.css";

function Services() {
  return (
    <>
      <TitlePage title="Services" subTitle="Our Services" />
      <Section {...servicesObj} />
      <Pricing />
      <Section {...homeObjeOne} />
    </>
  );
}

export default Services;
