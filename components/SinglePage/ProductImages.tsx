"use client";

import Image from "next/image";
import React, { useState } from "react";

const images = [
  { id: 0, url: "/images/togepi-airpods.jpg" },
  { id: 1, url: "/images/soda.jpg" },
  { id: 2, url: "/images/poke-deck.jpg" },
  { id: 3, url: "/images/soda.jpg" },
];

const ProductImages = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="relative h-[600px]">
        <Image
          src={images[index].url}
          alt="plush"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      {/* thumbnails */}
      <div className="flex justify-between gap-4 mt-8">
        {images.map((image, i) => (
          <div
            key={image.id}
            className="relative w-1/4 h-32 gap-4 cursor-pointer"
            onClick={() => setIndex(i)}
          >
            <Image
              src={image.url}
              alt="plush"
              fill
              sizes="30vw"
              className="object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
