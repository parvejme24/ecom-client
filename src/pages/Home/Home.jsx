import React from "react";
import { Helmet } from "react-helmet";
import Slider from "../../components/Home/Slider/Slider";
import Categories from "../../components/Home/Categories/Categories";
import PopularProducts from "../../components/Home/PopularProducts/PopularProducts";
import CustomerReviews from "../../components/Home/CustomerReviews/CustomerReviews";
import SubscribeSection from "../../components/Home/Subscribe/Subscribe";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Gadget | Home</title>
      </Helmet>

      <div>
        <Slider />
        <Categories />
        <PopularProducts />
        <CustomerReviews />
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Home;
