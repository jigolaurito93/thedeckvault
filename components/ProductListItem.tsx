import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductListItem = () => {
  return (
    <Link
      href={"/"}
      className="w-full col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 flex justify-evenly"
    >
      <div className="w-72 flex flex-col gap-2">
        <div className="flex relative justify-center w-full h-64 items-center border shadow-xl">
          <Image
            src={"https://images.pokemontcg.io/base1/1_hires.png"}
            alt="soda"
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
          <span className="font-medium">Alakazam</span>
          <span className="font-semibold">$14</span>
        </div>
        <div className="text-sm  w-full text-gray-500 ">My description</div>
        <button className="rounded-2xl self-start ring-1 ring-accent-1 text-accent-1 py-2 px-4 text-xs hover:bg-accent-1 hover:text-white items-start">
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductListItem;

{
  /* <Link
href={"/"}
className="flex flex-col gap-4 w-60 col-span-1 md:col-span-2  items-center"
>
<div className="relative w-full flex h-64 border rounded-md shadow-md items-center justify-center">
  <Image
    src={"https://images.pokemontcg.io/bw11/1_hires.png"}
    alt="soda"
    height={150}
    width={150}
    className="absolute rounded-md z-10 hover:opacity-0 transition-opacity ease-in duration-500 w-[150px]"
  /> */
}
{
  /* <Image
    src={"https://images.pokemontcg.io/bw11/1_hires.png"}
    alt="soda"
    height={150}
    width={150}
    className="absolute object-cover rounded-md w-[150px]"
    /> */
}
{
  /* </div>
<div className="flex justify-between w-full">
  <span className="font-medium">Alakazam</span>
  <span className="font-semibold">$14</span>
</div>
<div className="text-sm text-gray-500 text-left w-full">
  My description
</div>
<button className="rounded-2xl ring-1 ring-accent-1 text-accent-1 py-2 px-4 text-xs hover:bg-accent-1 hover:text-white w-max items-start">
  Add to Cart
</button>
</Link> */
}
