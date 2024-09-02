import Image from "next/image";
import React from "react";

const CartModal = () => {
  const cartItems = true;
  return (
    <div className="border w-max absolute p-4 rounded-md shadow-md bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <h2 className="text-xl">Shopping Cart</h2>
          <div className="flex flex-col gap-8">
            {/* item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pokemontcg.io/base1/2_hires.png"
                width={72}
                height={96}
                alt="Blastoise"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$500</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* top */}
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
                {/* bottom */}
              </div>
            </div>
            {/* item */}
            {/* item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pokemontcg.io/base1/2_hires.png"
                width={72}
                height={96}
                alt="Blastoise"
              />
              <div className="flex flex-col justify-between w-full ">
                {/* top */}
                <div>
                  {/* title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$500</div>
                  </div>
                  {/* description */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* top */}
                {/* bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty.2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
                {/* bottom */}
              </div>
            </div>
            {/* item */}
            {/* Subtotal */}
            <div>
              <div className="flex items-center justify-between font-semibold">
                <span>Subtotal</span>
                <span>$500</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                qui?
              </p>
              {/* button */}
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                  View Cart
                </button>
                <button className="bg-black rounded-md py-3 px-4  text-white ">
                  Checkout
                </button>
              </div>
              {/* button */}
            </div>
            {/* Subtotal */}
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
