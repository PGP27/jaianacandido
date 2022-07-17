interface LocationCardProps {
  image: string,
  title: string,
  desc: string,
  mapURL?: string,
  imgRounded?: boolean,
};

const LocationCard = ({ image, title, desc, mapURL, imgRounded }: LocationCardProps) => (
  <div className="max-w-[400px] lg:max-w-none my-10 mx-4 xl:mx-10 flex-1 flex flex-col items-center bg-slate-50 shadow-lg border rounded-lg py-4 px-8">
    <p className="h-20 text-lg text-center">{title}</p>
    <div className="h-full flex flex-col">
      <img src={image} alt={title} className={`h-28 self-center my-8 ${imgRounded && 'rounded-full'}`} />
      <p className="h-40 sm:h-28">{desc}</p>
      {mapURL && (
        <a className="w-fit underline underline-offset-2 hover:text-blue-800 transition" rel="noreferrer" href={mapURL} target="_blank">Ver no mapa</a>
      )}
    </div>
  </div>
);

export default LocationCard;
