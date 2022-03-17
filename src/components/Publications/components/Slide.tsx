interface SlideProps {
  image: string,
  title: string,
  desc: string,
  link: string,
};

const Slide = ({ image, title, desc, link }: SlideProps) => (
  <a rel="noreferrer" href={link} target="_blank">
      <div className={`${image} h-80 w-80`}>
        <p>{title}</p>
        <p>{desc}</p>
      </div>
    </a>
);

export default Slide;
