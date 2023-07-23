import { useSpring,animated } from '@react-spring/web';
import React, { useState } from 'react'

const GroupingContent = ({icon,propertyCount,propertyType,style,img}) => {

  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "translateY(-20px)" : "translateY(0)",
        config: { duration: 200,
          friction: 120,
          tension: 1000, },

  });
  return (
    <animated.div  onMouseEnter={() => setHovered(true)} style={springProps}
    onMouseLeave={() => setHovered(false)}   data-aos="fade-up" className={`relative w-[367px]  transform cursor-pointer rounded-[17px] ${style} bg-transparent px-4 lg:px-0`}>
    <img
      src={img}
      className="h-auto w-full rounded-[17px] "
      alt=""
    />
    <div className="absolute bottom-5 left-[5%] w-[90%] rounded-[18px] bg-white px-2  py-4 ">
      <div className="flex  flex-row-reverse items-baseline justify-between px-2">
        <div className="font-IRANYekanWeb text-[14px] font-[400] leading-[165.409%] tracking-[-0.56px] text-[#969595]">
          {propertyCount.toLocaleString()}
          <span className="mx-1 ">ملک</span>
        </div>
        <div className="text-[#000 font-IRANYekanWeb text-[23px] font-[700]">
          {propertyType}
        </div>
      </div>
    </div>
    <div className="absolute right-5 top-3 rounded-full bg-white p-3 ">
      {icon}
    </div>
  </animated.div>  )
}

export default GroupingContent