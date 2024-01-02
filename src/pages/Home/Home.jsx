import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../../components/Home/Slider/Slider";
import Categories from "../../components/Home/Categories/Categories";
import PopularProducts from "../../components/Home/PopularProducts/PopularProducts";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>SmartTech | Home</title>
      </Helmet>

      <div>
        <Slider />
        <Categories />
        <PopularProducts />
      </div>
    </div>
  );
};

export default Home;
