import { ArrowLongLeftIcon } from '@heroicons/react/24/solid'

const ArrowIconLeft = ({isLast,handleNext}) => {
  return (
    <div
            className={`cursor-pointer rounded-[10px] bg-main-green p-3 text-white disabled:opacity-60 ${
              isLast && "opacity-50"
            } `}
            onClick={handleNext}
          >
            {<ArrowLongLeftIcon className="h-6 w-6  " />}
          </div>  )
}

export default ArrowIconLeft