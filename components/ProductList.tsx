import React from "react";
import ProductListItem from "./ProductListItem";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 lg:px-12 h-full grid grid-cols-12 w-full justify-evenly gap-y-10 md:w-[750px] lg:w-[1000px] xl:w-[1300px] 2xl:w-[1400px]">
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
      <ProductListItem />
    </div>
  );
};

export default ProductList;
