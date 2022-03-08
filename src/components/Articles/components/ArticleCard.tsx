import { createElement } from "react";

const ArticleCard = ({ icon, title, link }: any) => {
  return (
    <div className="lg:h-60 max-w-[300px] my-8 rounded-md border border-gray-400 bg-white transition lg:mx-8 xl:mx-12 hover:scale-105">
      <div className="h-full flex flex-col justify-between">
        <div className="flex flex-col items-center">
          {createElement(icon, {fontSize: "60px", className: "mt-4"})}
          <h3 className="p-4 text-lg text-justify">{ title }</h3>
        </div>
        <div className="mx-4 mb-4">
          <a
            className="text-blue-800 hover:underline underline-offset-2"
            href={ link }
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
