import React from "react";
import ProductListItem from "./ProductListItem";
import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
  return (
    <div className="mt-12 h-full grid grid-cols-12 w-full justify-center lg:justify-between gap-12">
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
