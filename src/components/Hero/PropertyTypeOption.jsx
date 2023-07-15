import { useEffect, useRef, useState } from "react";
import style from "../../styles/HeroSection.module.css";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const PropertyTypeOption = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState("");
  const options = ["آپارتمان", "زمین ", "کلنگی", "ویلایی ", "اداری"];
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
    <div className="relative z-[40]   " ref={dropdownRef}>
      <div
        className={`relative h-[58px] w-[259px] cursor-pointer   rounded-[9px] bg-white xl:w-[286px]    ${style.metreagBoxShadow} flex  items-center justify-between px-4  `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${style.metrageText}`}> نوع ملک :</div>
        <div className={`${style.metrageYou} ml-2 flex  flex-row-reverse`}>
          {" "}
          <span>
            {!isOpen ? (
              <ChevronDownIcon className="absolute top-[40%] h-3 w-6 items-center align-middle   " />
            ) : (
              <ChevronUpIcon className="absolute top-[40%] h-3 w-6 items-center align-middle   " />
            )}
          </span>{" "}
          <span className="tracking-wide">
            {select ? select : "نوع  ملک شما"}
          </span>
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

export default PropertyTypeOption;
