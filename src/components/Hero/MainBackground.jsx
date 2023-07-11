const MainBackground = ({heroImage}) => {
  return (
    <>
      <div className="w-full lg:block hidden      overflow-hidden  ">
        <img
          className="z-[10] top-[0] left-0 h-[90vh] bg-[50%_0] bg-no-repeat lg:max-w-[510px]  xl:max-w-[660px]	   2xl:max-w-[759px] overflow-x-hidden  object-fill    absolute  "
          src={heroImage[0]?.homePage_pic}
          alt=""
        />
      </div>
    </>
  );
};

export default MainBackground;
