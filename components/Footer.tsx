import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-gray-100 md:px-24 lg:px-12 py-24 px-12 xl:px-24 2xl:px-[200px] flex-col relative">
      <div className="hidden sm:flex md:hidden absolute">SM</div>
      <div className="hidden md:flex lg:hidden absolute">MD</div>
      <div className="hidden lg:flex xl:hidden absolute">LG</div>
      <div className="hidden xl:flex 2xl:hidden absolute">XL</div>
      <div className="hidden 2xl:flex 3xl:hidden absolute">2XL</div>

      {/* TOP */}
      <div className="flex flex-col lg:flex-row justify-evenly gap-14 lg:gap-8 2xl:gap-28">
        {/* LEFT */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8 ">
          <Link href={"/"} className="text-2xl tracking-wide">
            TDV
          </Link>
          <p>1234 Elm Street Springfield, IL 62704 United States</p>
          <span className="font-semibold">tdv@pkmn.dev</span>
          <span className="font-semibold">+1 234 567 8900</span>
          <div className="flex gap-6">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
        {/* MIDDLE */}
        <div className="hidden lg:flex lg:w-1/2 2xl:gap-12 justify-between 2xl:justify-evenly">
          <div className="flex flex-col gap-12">
            <h1 className="text-lg font-medium">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href={"#"}>About Us</Link>
              <Link href={"#"}>Careers</Link>
              <Link href={"#"}>Affiliates</Link>
              <Link href={"#"}>Blog</Link>
              <Link href={"#"}>Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="text-lg font-medium">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"#"}>New Arrivals</Link>
              <Link href={"#"}>Accessories</Link>
              <Link href={"#"}>Men</Link>
              <Link href={"#"}>Women</Link>
              <Link href={"#"}>All Products</Link>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <h1 className="text-lg font-medium">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href={"#"}>Customer Service</Link>
              <Link href={"#"}>My Account</Link>
              <Link href={"#"}>Find A Store</Link>
              <Link href={"#"}>Legal & Privacy</Link>
              <Link href={"#"}>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8 ">
          <div className="text-xl font-semibold">SUBSCRIBE</div>
          <p>
            Stay ahead with the latest updates on trends, promotions, and more!
          </p>
          <div className="flex h-full">
            <input
              type="text"
              placeholder="Email Address"
              className="p-4 max-w-[300px] min-w-[100px] lg:px-3 w-full h-full outline-none"
            />
            <button className="bg-red-500 h-full py-4 px-7 lg:px-4 xl:px-6 text-white">
              JOIN
            </button>
          </div>
          <span className="font-semibold text-lg">Secure Payments</span>
          <div className="flex gap-x-4 flex-wrap">
            <Image src={"/images/visa.png"} alt="Visa" width={50} height={50} />
            <Image src={"/images/visa.png"} alt="Visa" width={50} height={50} />
            <Image src={"/images/visa.png"} alt="Visa" width={50} height={50} />
            <Image src={"/images/visa.png"} alt="Visa" width={50} height={50} />
            <Image src={"/images/visa.png"} alt="Visa" width={50} height={50} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col gap-3">
        <div>&copy; 2024 TDV</div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-6">
            <div className="text-gray-500">Language</div>
            <div>United States | English</div>
          </div>
          <div className="flex gap-6">
            <div className="text-gray-500">Currency</div>
            <div>$ USD</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
