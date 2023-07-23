import { messageIcon } from "../../assets/svg/svg";
import { convertToPersianNumber } from "../../lib/helper";
import style from "../../styles/SliderAndCards.module.css";

const CardPrices = ({item,ownstyle}) => {
  return (
    <div
    className={` ml-2 mt-[18px] flex items-center justify-between   overflow-hidden whitespace-nowrap `}
  >
    <div className={`${style.meterPrice} flex  truncate ml-2 `}>
      <span className="ml-1">{messageIcon}</span>{" "}
      <span className="font-IRANYekanWeb ">{convertToPersianNumber(item?.price)}</span>{" "}
      <span className="mr-2 text-[16px] text-gray-600 font-IRANYekanWeb">تومان</span>
    </div>
    <div className={` font-IRANYekanWeb whitespace-nowrap ${style.meterPrice2} ${ownstyle ? ownstyle : 'md:flex hidden' } `}>
      ({convertToPersianNumber(item?.priceByEachMeter)})
    </div>
  </div>  )
}

export default CardPrices