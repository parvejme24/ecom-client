import React from "react";
import { blogData } from "../../../public/data";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import BlogCard from "../../components/Blogs/BlogCard/BlogCard";

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Smart Gadget | Blogs</title>
      </Helmet>

      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {blogData.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
