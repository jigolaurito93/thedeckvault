"use client";

import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PokemonCards } from "@/data/pokemon-cards";

interface PokemonItemProps {
  name: string;
  price: number;
  description: string;
}

const getPokemonCardData = (name: string) => {
  const card = PokemonCards.find((card) => card.name === name);
  return card
    ? { imageUrl: card.image, description: card.description }
    : undefined;
};

const EditProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<PokemonItemProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [value, setValue] = useState({
    name: "",
    price: "",
    description: "",
  }); // State for input value

  const fetchProductByID = async (productId: string) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("Products")
      .select("*")
      .eq("id", productId)
      .single();

    if (error) {
      setError(error.message);
    } else {
      setProduct(data);
      setValue({
        name: data.name,
        price: data.price,
        description: data.description,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id && typeof id === "string") {
      fetchProductByID(id);
    } else {
      setLoading(false); // Ensure we don't keep the loading state if no ID is present
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const pokemonCardData = product
    ? getPokemonCardData(product.name)
    : undefined;

  return (
    <div className="flex justify-center items-center">
      <div className="border rounded-md w-fit my-32 px-8 pt-8 pb-8 space-y-8">
        <h1 className="text-4xl">Edit Product</h1>
        <div className="flex gap-10">
          <div className="flex flex-col gap-3">
            <div className="border w-72 h-72 flex justify-center items-center">
              {product && pokemonCardData && (
                <Image
                  src={pokemonCardData.imageUrl}
                  alt={product.name || "Product Image"}
                  className="w-40 mx-auto"
                  width={600}
                  height={600}
                  priority
                />
              )}
            </div>
            <button className="border px-2 py-1 shadow-lg w-fit">
              Edit Image
            </button>
          </div>
          <form action="" className="flex flex-col gap-8">
            <div className="flex gap-4 items-center">
              <label htmlFor="" className="w-[90px] text-right">
                Name
              </label>
              <input
                type="text"
                className="border rounded-md px-2 py-1"
                value={value.name}
                onChange={(e) => setValue({ ...value, name: e.target.value })}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="" className="w-[90px] text-right">
                Price
              </label>
              <input
                type="text"
                className="border rounded-md px-2 py-1"
                value={value.price}
                onChange={(e) => setValue({ ...value, price: e.target.value })}
              />
            </div>
            <div className="flex gap-4 items-center">
              <label htmlFor="" className="w-[90px] text-right">
                Description
              </label>
              <textarea
                className="border rounded-md px-2 py-1"
                rows={6}
                value={value.description}
                onChange={(e) =>
                  setValue({ ...value, description: e.target.value })
                } // Update state on change
              />
            </div>
            <button className="border w-fit px-4 py-1 rounded-md mt-32 self-end">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
