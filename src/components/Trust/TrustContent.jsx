import React from 'react'

const TrustContent = ({icon,desc,title}) => {
  return (
    <div className="flex "    data-aos="fade-up">
    <div>{icon}</div>
    <div className="mx-[33px] flex flex-col space-y-3">
      <h1 className="text-[#121939]  text-center md:text-right   font-IRANYekanWeb text-[23px] font-[700] leading-[165.409%] tracking-[-1.265px]">{title}</h1>
      <p className="font-IRANYekanWeb  text-center  md:text-right font-[400] text-[11px] leading-[165.409%] text-[#9B9B9B]  ">
      {desc}
      </p>
    </div>
  </div>  )
}

export default TrustContent