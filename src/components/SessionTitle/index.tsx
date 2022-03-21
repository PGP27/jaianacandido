interface SessionTitleProps {
  title: string,
  color?: string,
  bgColor: string,
  lineColor: string,
};

const SessionTitle = ({ title, color, bgColor, lineColor}: SessionTitleProps) => (
  <div className="flex flex-col items-center pt-10">
    <h2 className={`relative z-10 ${bgColor} px-6 text-3xl text-center ${color}`}>{title}</h2>
    <div className={`hidden sm:block relative z-0 bottom-[18px] h-1 w-[500px] ${lineColor} rounded-full`} />
  </div>
);

export default SessionTitle;
