import React from "react";
import { footerMenu } from "../../Data/footerData";

const items = { ...footerMenu.menu };

function mountMenu() {
  let menuItems = items.map((item) => {});
}

function menuFooter() {
  return console.log(items);
}

export default menuFooter;
