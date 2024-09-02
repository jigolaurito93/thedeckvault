"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form["search"].value as string;

    if (search) router.push(`/list?name=${search}`);
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        placeholder="Search..."
        className="flex-1 bg-transparent outline-none"
        name="search"
      />
      <button className="text-lg">
        <CiSearch className="cursor-pointer" />
      </button>
    </form>
  );
};

export default SearchBar;
