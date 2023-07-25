import React from "react";
import MetrageOption from "./MetrageOption";
import PropertyTypeOption from "./PropertyTypeOption";
import PriceRange from "./PriceRange";
const SearchOption = () => {
  return (
    <>
      <MetrageOption />
      <PropertyTypeOption />
      <PriceRange />
      <button
        type="submit"
        className="z-20 whitespace-nowrap rounded-md  bg-main-green  px-6 py-4  font-IRANYekanWeb text-white transition-all  duration-300  ease-linear hover:border-main-green hover:bg-green-500 hover:text-white xl:mx-4"
      >
        جستجوی ملک
      </button>
    </>
  );
};

export default SearchOption;
