import style from "../../styles/SliderAndCards.module.css";
import ImageCard from "./ImageCard";
import CardPrices from "./CardPrices";
import InformationList from "./InformationList";
import ProflieCard from "./ProflieCard";
import { useSpring,animated } from "@react-spring/web";
import { useState } from "react";
const Card = ({ item ,ownstyle,cardPadddng}) => {
  const [hovered, setHovered] = useState(false);

  const springProps = useSpring({
    transform: hovered ? "translateY(-20px)" : "translateY(0)",
        config: { duration: 200, mass: 5,
          friction: 120,
          tension: 1000, },

  });
  return (
    <animated.div
    onMouseEnter={() => setHovered(true)} style={springProps}
    onMouseLeave={() => setHovered(false)}      className={`z-20 mx-10 my-[18px]   cursor-pointer rounded-[10px] ${cardPadddng} lg:mx-2 ease duration-300  ${style.cardShadow} relative transform `}
    >
      <div>
        {" "}
        <ImageCard item={item} />
      </div>
      <div className="mr-1">
        <h1 className={`text-right text-[21px] ${style.cardTitle} mx-1 my-3`}>
          {item?.title}
        </h1>
        <div className={`${ownstyle}`}> 
          <InformationList item={item} />
        </div>
        <CardPrices ownstyle={ownstyle} $ item={item} />
        <ProflieCard item={item} />
      </div>
    </animated.div>
  );
};

export default Card;
