const LocationCard = ({ img, title, text }: any) => {
  return (
    <div className="max-w-[350px] flex flex-col justify-between bg-gradient-to-br from-gray-100 to-blue-100 border rounded-md py-10 px-2 sm:px-8 mb-20 lg:mb-0 mx-4 xl:mx-8 2xl:mx-12">
      <div className="flex flex-col justify-center items-center text-center">
        <h3 className="text-xl">{title}</h3>
        <img
          src={img}
          alt={title}
          className="h-28 my-8"
        />
      </div>
      <p className="text-center lg:text-left">{text}</p>
    </div>
  );
};

export default LocationCard;
