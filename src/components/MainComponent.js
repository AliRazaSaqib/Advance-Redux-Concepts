/** @format */

import React from "react";

import CartList from "./CartList";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";

const MainComponent = () => {
  return (
    <div>
      <HeaderComponent />
      <CartList />
      <FooterComponent />
    </div>
  );
};

export default MainComponent;
