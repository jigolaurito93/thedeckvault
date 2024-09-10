import Campaign from "@/components/ListPage/Campaign";
import FilterSection from "@/components/ListPage/FilterSection";
import ProductList from "@/components/ProductList";
import React from "react";

const ListPage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative border-4">
      <Campaign />
      <FilterSection />
      <ProductList />
    </div>
  );
};

export default ListPage;
