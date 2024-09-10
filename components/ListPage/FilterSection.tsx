const FilterSection = () => {
  return (
    <div className="mt-12 flex gap-4 flex-wrap">
      <select
        name="type"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      >
        <option>Type</option>
        <option value={"physical"}>Physical</option>
        <option value={"digital"}>Digital</option>
      </select>
      <input
        type="text"
        name="min"
        id=""
        placeholder="min price"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
      />
      <input
        type="text"
        name="max"
        id=""
        placeholder="max price"
        className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
      />
      <select
        name="category"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      >
        <option>Category</option>
        <option value={"cards"}>Physical</option>
        <option value={"digital"}>Digital</option>
      </select>
      <select
        name="allFilters"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      >
        <option>All Filters</option>
        <option value={"cards"}>Physical</option>
        <option value={"digital"}>Digital</option>
      </select>
      <select
        name="sortBy"
        id=""
        className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
      >
        <option>Sort By</option>
        <option value={"cards"}>Price (low to high)</option>
        <option value={"cards"}>Price (high to low)</option>
        <option value={"digital"}>Newest</option>
        <option value={"digital"}>Oldest</option>
      </select>
    </div>
  );
};

export default FilterSection;
