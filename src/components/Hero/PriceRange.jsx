import { useEffect, useRef, useState } from "react";
import style from "../../styles/HeroSection.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const PriceRange = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [select, setSelect] = useState('')
  const options = ["100 تا 500 میلیون", "500 میلیون تا 1 میلیارد ", "1 تا 5 میلیارد تومن","5 تا 10 میلیارد تومن ","بالای ده میلیارد تومن"];
  const dropdownRef = useRef(null);

 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative " ref={dropdownRef} >
      <div
        className={`w-[259px] 2xl:w-[343px] h-[58px] bg-white   rounded-[9px] cursor-pointer relative    ${style.metreagBoxShadow} flex  justify-between items-center px-4  `} onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${style.metrageText}`}> بازه قیمتی :</div>
        <div
          className={`${style.metrageYou} flex flex-row-reverse  ml-2`}
        >
          {" "}
          <span>
{
  !isOpen ?             <ChevronDownIcon className="w-6 h-3 align-middle items-center absolute top-[40%]   " />
:            <ChevronUpIcon className="w-6 h-3 align-middle items-center absolute top-[40%]   " />

}
          </span>{" "}
          <span className="tracking-wide">{select ? select : 'قیمت شما'}</span>
        </div>

      </div>
      <div  className={`lg:absolute relative w-full shadow-lg  rounded-[10px]  p-2 transition duration-200    ${isOpen ? 'block' : 'hidden'}`}>
        {options.map((item,index) => {
          return  <div onClick={() => {
            setIsOpen(false)
            setSelect(item)
          }}  className={`flex flex-col   md:flex-row font-IRANYekanWeb rounded-md py-2 px-4 cursor-pointer text-[#a5a5a5]  hover:bg-main-green hover:text-white transition duration-200 ease-linear      bg-white`} key={index}>{item}</div>
        })}
      </div>
    </div>
  );
};



export default PriceRange