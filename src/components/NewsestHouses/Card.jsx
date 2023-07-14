import style from "../../styles/NewsHouses.module.css";
import {
  callIcon,
  cameraIcon,
  messageIcon,
  specialIcon,
  teltegramIcon,
} from "../../assets/svg/svg";
import ImageCar from "./ImageCard";
import ImageCard from "./ImageCard";
import CardPrices from "./CardPrices";
import InformationList from "./InformationList";
import ProflieCard from "./ProflieCard";
const Card = ({ item }) => {
  return (
    <div
      className={`z-20 mx-10 my-[18px] cursor-pointer rounded-[10px] p-2 lg:mx-0 ${style.cardShadow} relative `}>
      <ImageCard item={item} />
      <div className="mr-1">
        <h1 className={`text-right text-[21px] ${style.cardTitle} mx-1 my-3`}>
          {item?.title}
        </h1>
        <InformationList item={item} />
        <CardPrices item={item} />
        <ProflieCard item={item} />
      </div>
    </div>
  );
};

export default Card;
