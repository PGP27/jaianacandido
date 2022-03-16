interface LocationCardProps {
  image: string,
  title: string,
  desc: string,
  mapURL?: string,
};

const LocationCard = ({ image, title, desc, mapURL }: LocationCardProps) => (
  <div className="max-w-[400px] mx-10 flex flex-col items-center bg-slate-50 shadow-lg border rounded-lg py-4 px-8">
    <p className="h-20 text-lg text-center font-medium">{title}</p>
    <div className="h-full flex flex-col">
      <img src={image} alt={title} className="h-28 self-center my-8" />
      <p className="h-24">{desc}</p>
      {mapURL && (
        <a className="underline underline-offset-2 hover:text-blue-800 transition" rel="noreferrer" href={mapURL} target="_blank">Ver no mapa</a>
      )}
    </div>
  </div>
);

export default LocationCard;
