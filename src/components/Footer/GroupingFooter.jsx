import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const GroupingFooter = () => {
  return (
    <div className="px-5 py-5">
    <div>
      <h1
        className="mb-10 text-right font-IRANYekanWeb text-[19px] font-extrabold not-italic leading-[normal] tracking-[-0.684px] text-white
"
      >
        دسته بندی ها
      </h1>
      <ul
        className="tracking-[-0.576px];  space-y-3 text-right font-IRANYekanWeb text-base font-normal not-italic leading-[normal] text-white
"
      >
    <li 
        
        className="ease group flex cursor-pointer duration-300 hover:text-main-green hover:-translate-x-2 transform ">
          
            <span className=" ml-2  ease opacity-0 transition-all duration-200 group-hover:opacity-100   ">
           <ChevronLeftIcon className="text-main-green w-4 h-4"/>
          </span>
          <span>دوچرخه معمولی</span>
        </li>
        <li 
        
        className="ease group flex cursor-pointer duration-300 hover:text-main-green hover:-translate-x-2 transform ">
          
            <span className=" ml-2  ease opacity-0 transition-all duration-200 group-hover:opacity-100   ">
           <ChevronLeftIcon className="text-main-green w-4 h-4"/>
          </span>
          <span>دوچرخه برقی</span>
        </li>
        <li 
        
        className="ease group flex cursor-pointer duration-300 hover:text-main-green hover:-translate-x-2 transform ">
          
            <span className=" ml-2  ease opacity-0 transition-all duration-200 group-hover:opacity-100   ">
           <ChevronLeftIcon className="text-main-green w-4 h-4"/>
          </span>
          <span>لوازم جانبی دوچرخه</span>
        </li>
      </ul>
    </div>
  </div>  )
}

export default GroupingFooter