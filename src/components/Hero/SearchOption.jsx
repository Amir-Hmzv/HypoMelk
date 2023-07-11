import React from 'react'
import style from "../../styles/HeroSection.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import MetrageOption from './MetrageOption';
import PropertyTypeOption from './PropertyTypeOption';
import PriceRange from './PriceRange';

const SearchOption = () => {
  return (
    <>
        <MetrageOption/>
        <PropertyTypeOption/>
        <PriceRange/>
        <button type='submit' className='bg-main-green duration-300 ease-linear transition-all hover:text-white hover:bg-green-500  hover:border-main-green  px-6 py-4 text-white rounded-md font-IRANYekanWeb'>جستجوی ملک</button>
    </>
  )
}

export default SearchOption