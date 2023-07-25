

const ImageHorizontalCardContent = ({ item, ...rest }) => {
  const { handleNext, handlePrev, isLast, isFirst, image } = rest;
  console.log(handleNext);
  return (
    <div className="   " >
      <div>
        <img
          className="lg:w-aut inline-block min-h-[230px]    w-[100%] rounded-[13px] object-cover md:w-[94%] lg:h-[250px] lg:w-[350px] "
          src={image}
          alt=""
        />
      </div>
    </div>
  );
};
export default ImageHorizontalCardContent;
