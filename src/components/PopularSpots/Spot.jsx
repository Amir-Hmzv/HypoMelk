
const Spot = ({title,image}) => {
  return (
<div className="px-4 mb-10 transform hover:-translate-y-3 duration-300 ease-linear">
<div className="relative rounded-[17px] cursor-pointer ">
    <img
      src={image}
      className="h-[285px] w-[285px] rounded-[17px]"
      alt=""
    />
    <div className="absolute inset-0 rounded-[17px] bg-black opacity-50 flex-shrink-0 overflow-hidden  "></div>
    <div className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
      <h5 className="font-IRANYekanWeb text-[23px] font-[800] leading-[165.409%] tracking-[-0.805px] text-white text-center lg:whitespace-nowrap">
       {title}
      </h5>
    </div>
  </div> 
</div> )
}

export default Spot