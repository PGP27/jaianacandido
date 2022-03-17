interface AudienceCardProps {
  image: string,
  name: string,
  color: string,
};

const AudienceCard = ({ image, name, color }: AudienceCardProps) => (
  <div className="my-12 pt-4 bg-slate-50 rounded-lg border shadow-md">
    <div className={`h-48 w-52 sm:w-60 2xl:w-80 flex items-end justify-end ${image} bg-contain bg-no-repeat bg-bottom`} />
    <p className={`py-1 px-4 text-center rounded-b-lg text-white ${color}`}>{name}</p>
  </div>
);

export default AudienceCard;
