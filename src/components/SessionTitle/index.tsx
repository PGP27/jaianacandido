interface SessionTitleProps {
  title: string,
};

const SessionTitle = ({ title }: SessionTitleProps) => (
  <div className="flex flex-col items-center mt-16 mb-4">
    <h2 className="relative z-10 bg-white px-6 font-medium text-2xl">{title}</h2>
    <div className="hidden sm:block relative z-0 bottom-[18px] h-1 w-[400px] bg-indigo-800 rounded-full" />
  </div>
);

export default SessionTitle;
