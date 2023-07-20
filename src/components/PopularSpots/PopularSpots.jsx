import { HeadTitles } from "../CardSldierAndContents";
import Spot from "./Spot";

const PopularSpots = () => {
  return (
    <div className="mt-[132px] w-full  ">
      <div className="mx-auto max-w-[1201px]">
        <div className="mb-[58px]">
          <HeadTitles
            smallTitle={"بهشت خودت رو پیدا کن"}
            title={"منطقه های محبوب"}
          />
        </div>
        <div className=" grid grid-cols-2 place-content-center place-items-center md:grid-cols-3 xl:grid-cols-4 ">
          <Spot title={"خیابان پهلوی"} image={"/spots/1.png"} />
          <Spot title={"خیابان شیر و خورشید"} image={"/spots/2.png"} />
          <Spot title={"خیابان امام رضا"} image={"/spots/1.png"} />
          <Spot title={"خیابان نور"} image={"/spots/2.png"} />
          <Spot title={"خیابان پهلوی"} image={"/spots/3.png"} />
          <Spot title={"خیابان امام رضا"} image={"/spots/4.png"} />
          <Spot title={"خیابان شیر و خورشید"} image={"/spots/3.png"} />
          <Spot title={"خیابان پهلوی"} image={"/spots/4.png"} />
        </div>
      </div>
      <div className="bg-spot   relative bottom-32 pointer-events-none z-[-1] h-[258px] bg-cover"></div>
    </div>
  );
};

export default PopularSpots;
