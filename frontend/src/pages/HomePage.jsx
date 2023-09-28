import React from 'react';
import Newlaunch from "../components/HomePage/Newland";
import Mybasket from "../components/HomePage/Mybasket";
import Bank from "../components/HomePage/Bank";
import Bestsell from "../components/HomePage/bestseller";
import Topoffer from "../components/HomePage/Topoffer";
import Fruit from "../components/HomePage/Fruit";
import Beverage from "../components/HomePage/Beverage";
import Snack from "../components/HomePage/Snack";
import Cleaning from "../components/HomePage/Cleaning";
import Beauty from "../components/HomePage/Beauty";
import Kitchen from "../components/HomePage/Kitchen";
import Banner from "../components/HomePage/banner";
import Brand from "../components/HomePage/Brand";
import Featured from "../components/HomePage/Featured";
import Bigonline from "../components/HomePage/bigonline";
import GoToTop from "../components/Scrollup/scrollup";
import "../components/HomePage/Landing.Module.css";





const HomePage = () => {
  
  return (
    <div>

      <Newlaunch />
      <Mybasket />
      <Bank />
      <Bestsell />
      <Topoffer />
      <Fruit />
      <Beverage />
      <Snack />
      <Cleaning />
      <Beauty />
      <Kitchen />
      <Banner/>
      <Brand />
      <Featured />
      <Bigonline />
      <GoToTop/>
    </div>
    
  )
}

export default HomePage