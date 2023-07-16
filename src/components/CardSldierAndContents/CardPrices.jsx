import { messageIcon } from "../../assets/svg/svg";
import style from "../../styles/SliderAndCards.module.css";

const CardPrices = ({item,ownstyle}) => {
  return (
    <div
    className={` ml-2 mt-[18px] flex items-center justify-between   text-right`}
  >
    <div className={`${style.meterPrice} flex  `}>
      <span className="ml-1">{messageIcon}</span>{" "}
      <span className="font-IRANYekanWeb">{item?.price}</span>{" "}
      <span className="mr-2 text-[16px] text-gray-600 font-IRANYekanWeb">تومان</span>
    </div>
    <div className={`${style.meterPrice2} ${ownstyle ? ownstyle : 'md:flex hidden' } `}>
      ({item?.priceByEachMeter})
    </div>
  </div>  )
}

export default CardPrices