interface SlideProps {
  image: string,
  title: string,
  link: string,
};

const Slide = ({ image, title, link }: SlideProps) => (
  <a rel="noreferrer" href={link} target="_blank">
    <div className={`${image} h-full w-full`}>
      <p>{title}</p>
    </div>
  </a>
);

export default Slide;
