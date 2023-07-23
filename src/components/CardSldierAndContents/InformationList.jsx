import React from 'react'
import { convertToPersianNumber } from '../../lib/helper';

const InformationList = ({item}) => {
  return (
    <ul className="mt-[17px]   flex text-right font-IRANYekanWeb text-[14px] font-[700] text-[#101737]  ">
    {item?.informations?.map((txt, i) => {
      return (
        <li key={i}
          className={`relative mx-1 after:mr-2 after:hidden 
           after:h-1 after:w-1 after:rounded-full font-IRANYekanWe lg:my-2 text-[13px] after:bg-gray-500  after:content-[''] last:after:hidden after:lg:inline-block`}
        >
          {convertToPersianNumber(txt)}
        </li>
      );
    })}
  </ul>  )
}

export default InformationList