interface AudienceCardProps {
  image: string,
  name: string,
  color: string,
};

const AudienceCard = ({ image, name, color }: AudienceCardProps) => {
  return (
    <div className={`h-48 w-48 my-12 flex items-end justify-end ${image} bg-contain bg-no-repeat bg-center`}>
      <p className={`py-1 px-4 rounded-tl-3xl text-white font-medium ${color}`}>{name}</p>
    </div>
  );
};

export default AudienceCard;
