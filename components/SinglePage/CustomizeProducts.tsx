import React from "react";

const CustomizeProducts = () => {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="font-medium">Choose a flavor</h4>
      <ul className="flex items-center gap-3">
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-red-500">
          <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative bg-blue-500"></li>
        <li className="w-8 h-8 rounded-full ring-1 ring-gray-300 cursor-pointer relative cursor-not-allowed bg-green-500">
          <div className="absolute w-10 h-[2px] rotate-45 bg-red-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </li>
      </ul>
      <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-accent-1 text-accent-1 rounded-md py-1 px-4 text-sm cursor-pointer">
          Small
        </li>
        <li className="ring-1 ring-accent-1 text-white bg-accent-1 rounded-md py-1 px-4 text-sm cursor-pointer">
          Medium
        </li>
        <li className="ring-1 ring-pink-200 text-white cursor-not-allowed bg-pink-200 rounded-md py-1 px-4 text-sm">
          Large
        </li>
      </ul>
    </div>
  );
};

export default CustomizeProducts;
