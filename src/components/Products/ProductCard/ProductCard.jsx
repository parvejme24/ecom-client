import React from "react";

const ProductCard = ({ product }) => {
  const { image, title, price, brand } = product;
  return (
    <div className="bg-[#F7F8FA] p-6 space-y-2">
      <img src={image} alt="" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p>Price: ${price}</p>
      <p>{brand}</p>
      <button className="btn btn-primary">Add To Cart</button>
    </div>
  );
};

export default ProductCard;
