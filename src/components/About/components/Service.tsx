const Service = ({ img, text }: any) => (
  <div className="w-full my-4 flex flex-col justify-center items-center">
    <h3 className="p-4 text-center text-xl">{ text }</h3>
    <img
      src={ img }
      alt={ text }
      className="h-60 p-4"
    />
  </div>
);

export default Service;
