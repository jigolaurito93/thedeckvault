import Image from "next/image";

const Campaign = () => {
  return (
    <div className="hidden lg:flex items-center shadow-lg rounded-sm my-4">
      <div className="w-2/3  h-full px-48 flex flex-col gap-4">
        <h1 className="text-4xl font-semibold">
          Grab up to 50% off on Selected Products
        </h1>
        <button className="w-fit rounded-full px-5 py-2 font-medium text-white bg-red-400">
          Buy Now
        </button>
      </div>
      <div className="w-1/3 flex justify-start">
        <Image src="/images/poke1.png" alt="" width={300} height={300} />
      </div>
    </div>
  );
};

export default Campaign;
