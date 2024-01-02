import React from "react";
import { categories } from "../../../../public/data";

const Categories = () => {
  return (
    <div className="container mx-auto py-12">
      <div className="flex justify-between items-center flex-wrap gap-5">
        {categories.map((category) => (
          <div className="text-center">
            <img className="w-16 mx-auto" src={category.image} alt="" />
            <h4 className="font-semibold">{category.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
