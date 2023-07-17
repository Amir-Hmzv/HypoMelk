import React from "react";

export const Horizontal = () => {
  return (
    <div className="p-  relative mx-auto flex max-w-xs flex-col space-y-3 rounded-xl border border-white bg-white shadow-lg md:max-w-3xl md:flex-row md:justify-between md:space-x-5 md:space-y-0">
      <div className="grid w-full place-items-center bg-white md:w-full">
        <img
          src="/public/cards/horizontal/Rectangle 1.png"
          alt="tailwind logo"
          className="rounded- w-[500px] object-cover   "
        />
      </div>
      <div className="p- flex w-full flex-col space-y-2 bg-white md:w-2/3">
        <div className="item-center flex justify-between"></div>
        <h3 className="text-[21px] font-black   text-gray-800">
          فروش آپارتمان ساحلی قواره دوم دریا در آویدر نوشهر{" "}
        </h3>
        <p className="text-base text-gray-500 md:text-lg">
          The best kept secret of The Bahamas is the country’s sheer size and
          diversity. With 16 major islands, The Bahamas is an unmatched
          destination
        </p>
        <p className="text-xl font-black text-gray-800">
          $110
          <span className="text-base font-normal text-gray-600">/night</span>
        </p>
      </div>
    </div>
  );
};
