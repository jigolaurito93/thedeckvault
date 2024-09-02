"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const slides = [
  {
    id: 1,
    title: "Soda Pop Collections",
    description: "Sale! Up to 50% off!",
    img: "/images/soda.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Second slide",
    description: "Second slide description",
    img: "/images/soda.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 3,
    title: "Third slide",
    description: "Third slide description",
    img: "/images/soda.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div className="w-max h-full flex transition-all ease-in-out duration-1000">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-20 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {slide.description}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold px-32 tracking-wider">
                {slide.title}
              </h1>
              <Link href={slide.url}>
                <button className="rounded-md bg-black text-white py-3 px-4">
                  SHOP NOW
                </button>
              </Link>
            </div>
            {/* text container */}
            {/* image container */}
            <div className="relative xl:w-1/2 h-1/2 xl:h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                sizes="100%"
                className="object-cover object-bottom xl:object-center"
              />
            </div>
            {/* image container */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
