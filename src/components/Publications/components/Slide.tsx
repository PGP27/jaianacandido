interface SlideProps {
  image: string,
  title: string,
  link: string,
};

const Slide = ({ image, title, link }: SlideProps) => (
  <a rel="noreferrer" href={link} target="_blank">
    <div className={`${image} h-full w-full max-w-[400px] flex items-start rounded-lg border border-slate-400 shadow-lg`}>
      <p className="w-full p-2 rounded-lg bg-white text-lg">{title}</p>
    </div>
  </a>
);

export default Slide;
