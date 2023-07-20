import { ApartmentIcon, gardenIcon, gardenVillaIcon, groundIcon, groupApartment, shopIcon, villaHouseIcon } from "../../assets/svg/svg";
import { HeadTitles } from "../CardSldierAndContents";
import GroupingContent from "./GroupingContent";

const GroupingSection = () => {
  const price = 1320;
  return (
    <div className="mx-auto mt-[156px] max-w-[1201px]">
      <HeadTitles smallTitle={`دسته بندی`} title={`دسته بندی  ملک ها`} />
      <div className=" mt-[80px]  grid  grid-cols-1 place-content-center md:place-items-center place-items-center space-y-10    md:grid-cols-2 xl:grid-cols-3 lg:space-y-  lg:px-0">
        <GroupingContent icon={groupApartment} propertyCount={1320} img={'/grouping/image 1.png'} style={'mt-[37px]'} propertyType={' آپارتمان'}/>
        <GroupingContent icon={villaHouseIcon} propertyCount={1245} img={'/grouping/image 2.png'} propertyType={'خانه ویلایی'}/>
        <GroupingContent icon={gardenIcon} propertyCount={896} img={'/grouping/image 3.png'} propertyType={'باغ'}/>
        <GroupingContent icon={groundIcon} propertyCount={2245} img={'/grouping/image 4.png'} propertyType={'زمین'}/>
        <GroupingContent icon={shopIcon} propertyCount={767}  img={'/grouping/image 5.png'}propertyType={'مغازه و واحد تجاری'}/>
        <GroupingContent icon={gardenVillaIcon} propertyCount={767} img={'/grouping/image 6.png'} propertyType={'ویلا باغ'}/>

      </div>
    </div>
  );
};

export default GroupingSection;
