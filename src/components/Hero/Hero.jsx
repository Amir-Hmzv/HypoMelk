import MainSearchInput from "./MainSearchInput";
import MainnTitles from "./MainTitles";
import SearchOption from "./SearchOption";

const Hero = () => {
  return (
    <div className="w-full overflow-x-clip">
      <div className="mx-auto  max-w-[1201px] grid-cols-3 flex-row-reverse lg:grid   ">
        <div className="col-span-1 flex flex-col">
          <MainnTitles />
          <MainSearchInput />
          <form
            className={`relative bottom-8 z-[30]  my-5   grid grid-cols-1 place-items-center space-y-9 px-5   lg:flex   lg:flex-nowrap  lg:justify-between  lg:space-y-0   lg:px-8 xl:px-0 2xl:mt-[30%]   `}
          >
            <SearchOption />
          </form>
        </div>
        <div className="col-span-2 w-full ">
          <img
            src="/cards/news/backGround.png"
            className="absolute inset-0 flex  h-[500px] w-screen flex-1 overflow-hidden opacity-50 lg:relative lg:inset-auto lg:bottom-[17%] lg:right-[30%] lg:min-h-[800px] lg:w-[100%] lg:opacity-100 "
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
