"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FeaturedProduct } from "./ProductList";

interface ProductListItemProps {
  product: FeaturedProduct;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  // Function to truncate the description
  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length > maxLength) {
      return description.slice(0, maxLength) + "...";
    }
    return description;
  };

  return (
    <Link
      href={`/list?cat=${product.pokemon_name}`}
      className="w-full col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 flex justify-evenly"
    >
      <div className="w-72 flex flex-col gap-2">
        <div className="flex relative justify-center w-full h-64 items-center border shadow-xl">
          <Image
            src={product.card_image}
            alt={product.pokemon_name}
            height={150}
            width={150}
            className="absolute z-10 hover:opacity-0 transition-opacity ease-in duration-500 h-52"
          />
          <Image
            src="/images/tcg-back.png"
            alt="Back Card"
            height={150}
            width={150}
            className="absolute h-52"
          />
        </div>
        <div className="w-full flex justify-between">
          <span className="font-medium">{product.pokemon_name}</span>
          <span className="font-semibold">${product.price}</span>
        </div>
        <div className="text-sm w-full text-gray-500">
          {truncateDescription(product.description, 40)}
        </div>
        <button className="rounded-2xl self-start ring-1 ring-accent-1 text-accent-1 py-2 px-4 text-xs hover:bg-accent-1 hover:text-white items-start">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductListItem;