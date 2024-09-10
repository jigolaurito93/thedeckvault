import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Slider from "@/components/Slider";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-12 flex flex-col justify-center items-center 2xl:px-96">
        <h1 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl w-full">
          Featured Products
        </h1>
        <ProductList />
      </div>
      <div className="mt-24 flex flex-col ">
        <h1 className="text-2xl md:text-3xl lg:text-4xl w-full px-12 mb-12">Categories</h1>
        <CategoryList />
      </div>
      <div className="mt-24 px-12 flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl w-full">
          Featured Products
        </h1>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
