import { useEffect, useRef, useState } from "react";
import style from "../../styles/HeroSection.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const PriceRange = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("");
  const options = [
    "100 تا 500 میلیون",
    "500 میلیون تا 1 میلیارد ",
    "1 تا 5 میلیارد تومن",
    "5 تا 10 میلیارد تومن ",
    "بالای ده میلیارد تومن",
  ];
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative z-20" ref={dropdownRef}>
      <div
        className={` h-[58px] w-[259px]   mx-4  cursor-pointer   rounded-[9px] bg-white xl:w-[343px]    ${style.metreagBoxShadow} flex  items-center justify-between px-4  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${style.metrageText}`}> بازه قیمتی :</div>
        <div className={`${style.metrageYou} ml-2 flex  flex-row-reverse`}>
          {" "}
          <span>
            {!isOpen ? (
              <ChevronDownIcon className="absolute top-[40%] h-3 w-6 items-center align-middle   " />
            ) : (
              <ChevronUpIcon className="absolute top-[40%] h-3 w-6 items-center align-middle   " />
            )}
          </span>{" "}
          <span className="tracking-wide">{select ? select : "قیمت شما"}</span>
        </div>
      </div>
      <div
        className={`relative w-full rounded-[10px] p-2  shadow-lg  transition duration-200 lg:absolute    ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((item, index) => {
          return (
            <div
              onClick={() => {
                setIsOpen(false);
                setSelect(item);
              }}
              className={`flex cursor-pointer   flex-col rounded-md bg-white px-4 py-2 font-IRANYekanWeb text-[#a5a5a5]  transition duration-200 ease-linear hover:bg-main-green hover:text-white      md:flex-row`}
              key={index}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PriceRange;
