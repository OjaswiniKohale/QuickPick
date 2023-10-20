import React from "react";
import Fruit from "../components/HomePage/Fruit";
import Snack from "../components/HomePage/Snack";
import Cleaning from "../components/HomePage/Cleaning";

import GoToTop from "../components/Scrollup/scrollup";

const HomePage = () => {
  return (
    <div>
      {/* <Newlaunch /> */}
      {/* <Mybasket /> */}
      {/* <Bank /> */}
      {/* <Bestsell /> */}
      {/* <Topoffer /> */}
      <Fruit />
      {/* <Beverage /> */}
      <Snack />

      <Cleaning />
      {/* <Beauty /> */}
      {/* <Kitchen /> */}
      {/* <Banner/> */}
      {/* <Brand /> */}
      {/* <Featured /> */}
      {/* <Bigonline /> */}
      <GoToTop />
    </div>
  );
};

export default HomePage;

