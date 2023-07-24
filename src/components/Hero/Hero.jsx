import MainBackground from "./MainBackground";
import MainSearchInput from "./MainSearchInput";
import MainnTitles from "./MainTitles";
import SearchOption from "./SearchOption";

const Hero = () => {
  return (
    <div className="w-full overflow-x-clip">
      <div className="mx-auto  max-w-[1201px] flex-row-reverse lg:grid grid-cols-3   ">
       
        <div className="flex flex-col col-span-1">
          <MainnTitles />
          <MainSearchInput />
          <form className={`space-y-9 w-ful relative bottom-8  lg:space-y-0   2xl:mt-[30%] grid grid-cols-1 place-items-center my-5   lg:flex-nowrap   lg:flex  z-[30]  lg:justify-between   px-5 lg:px-8 xl:px-0   `}>
                <SearchOption />
              </form>
        </div>
        <div className="w-full col-span-2 ">
          
          <img
            src="/cards/news/backGround.png"
            className="flex overflow-hidden absolute  h-[500px] w-screen inset-0 lg:inset-auto opacity-50 lg:relative lg:bottom-[17%] lg:right-[27%] lg:min-h-[800px] lg:w-[750px] flex-1 lg:opacity-100 "
            alt=""
          />
        </div>
      </div>
      
   
    </div>
  );
};

export default Hero;
