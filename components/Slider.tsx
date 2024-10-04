"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Soda Pop Collections",
    description: "Sale! Up to 25% off!",
    img: "/images/soda.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-green-300 to-blue-500",
    classNameTitle: "text-5xl lg:text-6xl 2xl:text-8xl",
    classNameDesc: "text-xl lg:text-3xl 2xl:text-5xl",
  },
  {
    id: 2,
    title: "Vintage Gameboy Cartridges",
    description:
      "Relive the classics with our collection of vintage Gameboy cartridges.",
    img: "/images/cartridges.jpg",
    url: "/",
    bg: "bg-gradient-to-r from-red-400 to-yellow-500",
    classNameTitle: "text-5xl lg:text-6xl 2xl:text-7xl",
    classNameDesc: "text-xl lg:text-3xl 2xl:text-2xl 2xl:px-16",
  },
  {
    id: 3,
    title: "Pikachu Top Vintage",
    description: "Buy 1 get 1 free!",
    img: "/images/pikachu-shirt.avif",
    url: "/",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    classNameTitle: "text-5xl lg:text-6xl 2xl:text-7xl",
    classNameDesc: "text-xl lg:text-3xl 2xl:text-5xl",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
          >
            {/* text container */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-20 text-center">
              <h2 className={slide.classNameDesc}>{slide.description}</h2>
              <h1
                className={`${slide.classNameTitle} font-semibold px-32 tracking-wider`}
              >
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
      <div className="absolute flex left-1/2 bottom-8 gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
