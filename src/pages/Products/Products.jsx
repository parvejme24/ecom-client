import React from "react";
import { Helmet } from "react-helmet";
import { products } from "../../../public/data";
import ProductCard from "../../components/Products/ProductCard/ProductCard";

const Products = () => {
  return (
    <div className="container mx-auto py-14">
      <Helmet>
        <title>Smar Gadget | Products</title>
      </Helmet>

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
