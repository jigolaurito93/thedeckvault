import React from "react";
import CategoryListItem from "./CategoryListItem";

const CategoryList = () => {
  return (
    <div className="overflow-x-auto px-4 scrollbar-hide select-none">
      <div className="flex gap-4 md:gap-8">
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
        <CategoryListItem />
      </div>
    </div>
  );
};

export default CategoryList;
