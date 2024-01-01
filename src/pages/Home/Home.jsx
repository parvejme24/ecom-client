import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../../components/Home/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SmartTech | Home</title>
      </Helmet>

      <div>
        <Slider />
      </div>
    </div>
  );
};

export default Home;
