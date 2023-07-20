import { ArrowLongRightIcon } from '@heroicons/react/24/solid'

const ArrowIconRight = ({isFirst,handlePrev,customStyle}) => {
  return (
    <div
    className={`ml-2 cursor-pointer  ${customStyle} rounded-[10px] bg-main-green p-3 text-white ${
      isFirst && "opacity-50"
    } `}
    onClick={handlePrev}
  >
    {<ArrowLongRightIcon className="h-6 w-6  " />}
  </div>  )
}

export default ArrowIconRight