"use client";
import React, { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);
  //   temporary stock
  const stock = 4;
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center justify-between w-32 gap-4 rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl"
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl"
              onClick={() =>
                setQuantity((prev) => (prev === stock ? stock : prev + 1))
              }
            >
              +
            </button>
          </div>
          <div className="text-sm">
            Only <span className="text-orange-500">{stock} items </span>
            left! <br /> {"Dont"} miss it
          </div>
        </div>
        <button className="w-36 text-sm rounded-3xl ring-1 ring-accent-1 text-accent-1 py-2 px-4 hover:bg-accent-1 hover:text-white disabled:bg-pink-200 disabled:text-white">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
