import React from "react";
import { products } from "../../../../public/data";
import ProductCard from "./../../Products/ProductCard/ProductCard";

const PopularProducts = () => {
  return (
    <div className="container mx-auto py-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {products.slice(0, 4).map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default PopularProducts;
