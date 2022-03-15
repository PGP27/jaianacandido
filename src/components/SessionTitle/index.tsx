interface SessionTitleProps {
  title: string,
  bgColor: string,
};

const SessionTitle = ({ title, bgColor }: SessionTitleProps) => (
  <div className="flex flex-col items-center mt-10 mb-4">
    <h2 className={`relative z-10 ${bgColor} px-6 font-medium text-3xl`}>{title}</h2>
    <div className="hidden sm:block relative z-0 bottom-[18px] h-1 w-[400px] bg-indigo-800 rounded-full" />
  </div>
);

export default SessionTitle;
