import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListItem = () => {
  return (
    <Link
      href={"/"}
      className="flex flex-col gap-4 w-[250px] sm:w-[300px] col-span-1 md:col-span-2"
    >
      <div className="relative w-full flex h-64 border rounded-md shadow-md items-center justify-center">
        <Image
          src={"https://images.pokemontcg.io/bw11/1_hires.png"}
          alt="soda"
          height={150}
          width={150}
          className="absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 w-[150px]"
        />
        {/* <Image
          src={"https://images.pokemontcg.io/bw11/1_hires.png"}
          alt="soda"
          height={150}
          width={150}
          className="absolute object-cover rounded-md w-[150px]"
        /> */}
      </div>
      <div className="flex justify-between">
        <span className="font-medium">Alakazam</span>
        <span className="font-semibold">$14</span>
      </div>
      <div className="text-sm text-gray-500">My description</div>
      <button className="rounded-2xl ring-1 ring-accent-1 text-accent-1 py-2 px-4 text-xs hover:bg-accent-1 hover:text-white w-max">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductListItem;