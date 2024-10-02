"use client";
import { createClient } from "@/utils/supabase/client";
import React, { useEffect, useState } from "react";
import { PokemonCards } from "@/data/pokemon-cards";
import Image from "next/image";
import Link from "next/link";
import { IoChevronBack } from "react-icons/io5";
// import { checkAdmin } from "@/utils/checkAdmin";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category_id: number;
  created_at: string;
  updated_at: string;
}

interface PokemonCard {
  [key: string]: { imageUrl: string; description: string };
}

const productTitle = [
  "ID",
  "Product Image",
  "Name",
  "Price",
  "Description",
  "Category ID",
  "Created At",
  "Updated At",
];

const getPokemonCardData = (name: string) => {
  const card = PokemonCards.find((card) => card.name === name);
  return card
    ? { imageUrl: card.image, description: card.description }
    : undefined;
};

const AdminProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    const supabase = createClient();
    const { error, data } = await supabase.from("Products").select("*");

    if (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } else {
      setProducts(data || []);
    }
  };

  useEffect(() => {
    // checkAdmin();
    fetchProducts();
  }, []);

  return (
    <div className="px-32 py-10">
      <div>
        <button className="bg-blue-500 px-4 py-2 text-white rounded-md">
          <Link href={"/admin/dashboard"} className="flex items-center gap-1">
            <IoChevronBack />
            Back
          </Link>
        </button>
      </div>
      <h1 className="text-5xl py-6 font-semibold">Welcome Admin!</h1>
      <h1 className="text-2xl py-4">Products</h1>
      {error && <p>Error: {error}</p>}
      <table className="min-w-full border-collapse border border-black">
        <thead>
          <tr>
            {productTitle.map((title, i) => (
              <th key={i} className="border border-black px-4 py-2">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const {
              id,
              name,
              price,
              description,
              category_id,
              created_at,
              updated_at,
            } = product;
            const pokemonCardData = getPokemonCardData(name);

            return (
              <tr key={product.id}>
                <td className="border border-black px-4 py-2">{id}</td>
                <td className="border border-black px-4 py-2">
                  {pokemonCardData?.imageUrl && (
                    <Image
                      src={pokemonCardData.imageUrl}
                      alt={name}
                      className="w-20 h-28 mx-auto"
                      width={300}
                      height={300}
                    />
                  )}
                </td>
                <td className="border border-black px-4 py-2">{name}</td>
                <td className="border border-black px-4 py-2">${price}</td>
                <td className="border border-black px-4 py-2">
                  {pokemonCardData?.description || description}
                </td>
                <td className="border border-black px-4 py-2">{category_id}</td>
                <td className="border border-black px-4 py-2">
                  {new Date(created_at).toLocaleDateString()}
                </td>
                <td className="border border-black px-4 py-2">
                  {new Date(updated_at).toLocaleDateString()}
                </td>
                <td className="border border-black px-4 py-2">
                  <Link href={`/admin/products/${id}`}>
                    <button className="text-blue-700 text-center">Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AdminProducts;
