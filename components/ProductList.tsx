"use client";
import React, { useEffect, useState } from "react";
import ProductListItem from "./ProductListItem";
import { createClient } from "@/utils/supabase/client";

export interface FeaturedProduct {
  id: string;
  pokemon_name: string;
  description: string;
  price: number;
  card_image: string;
}

const ProductList = () => {
  const [products, setProducts] = useState<FeaturedProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const supabase = createClient();
      const { data, error } = await supabase.from("featuredList").select("*");
      if (error) {
        console.error("Error fetching products:", error);
      } else {
        setProducts(data);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="mt-12 h-full grid grid-cols-12 w-full justify-center lg:justify-between gap-12">
      {products.map((item, i) => (
        <ProductListItem key={i} product={item} />
      ))}
    </div>
  );
};

export default ProductList;
