import Campaign from "@/components/ListPage/Campaign";
import FilterSection from "@/components/ListPage/FilterSection";
import ProductList from "@/components/ProductList";
import { createClient } from "@/utils/supabase/server";
import { log } from "console";
import React from "react";

const ListPage = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("cards").select("*");
  log(data, error);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative border-4">
      <Campaign />
      <FilterSection />
      <ProductList />
    </div>
  );
};

export default ListPage;
