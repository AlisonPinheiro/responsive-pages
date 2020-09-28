import React from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
import "./style.css";

function Section({
  lightBackground,
  topLine,
  lightText,
  lightTextDescription,
  headLine,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div
        className={
          lightBackground ? "home__section" : "home__hero-section darkBg"
        }
      >
        <div className="container">
          <div className="row home__section-row"></div>
        </div>
      </div>
    </>
  );
}

export default Section;
