import Image from "next/image";
import Link from "next/link";
const CategoryListItem = () => {
  return (
    <Link
      href="/list?cat=text"
      className="flex-shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
    >
      <div className="relative border w-56 h-56 bg-slate-100">
        <Image
          src="/images/poke-deck.jpg"
          fill
          sizes="80vw"
          alt="Decks"
          className=""
        />
      </div>
      <h1>Category Name</h1>
    </Link>
  );
};

export default CategoryListItem;
