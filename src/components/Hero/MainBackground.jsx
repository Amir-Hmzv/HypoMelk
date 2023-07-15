const MainBackground = ({ heroImage }) => {
  return (
    <>
      <div className="hidden w-full overflow-hidden       lg:block  ">
        <img
          className="absolute left-0 top-[0] z-[10] h-[95vh] overflow-x-hidden bg-[50%_0]  bg-no-repeat	   object-fill lg:max-w-[510px]  xl:max-w-[660px]    2xl:max-w-[759px]  "
          src={heroImage[0]?.homePage_pic}
          alt=""
        />
      </div>
    </>
  );
};

export default MainBackground;
