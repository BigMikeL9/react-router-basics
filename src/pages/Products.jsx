import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>This is the PRODUCTS page</h1>
      <ul>
        <Link to="/products/book">A Book</Link>
        <Link to="/products/carpet">A Carpet</Link>
        <Link to="/products/online-course">An Online Course</Link>
      </ul>
    </div>
  );
};

export default Products;
