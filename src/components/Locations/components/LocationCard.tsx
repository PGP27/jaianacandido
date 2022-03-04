const LocationCard = ({ img, title, text }: any) => {
  return (
    <div className="flex-1 flex flex-col items-center my-16 mx-4 lg:mx-8 xl:mx-20">
      <img
        src={img}
        alt={title}
        className="h-32"
      />
      <div className="flex flex-col justify-center text-center lg:text-left">
        <h3 className="text-lg text-center my-8">{title}</h3>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

export default LocationCard;