import { useSelector } from "react-redux";
import Navbar from "../components/ui/Navbar";
import { Link } from "react-router-dom";

const SavedPage = () => {
  const savedNews = useSelector((state) => state.savedNews);

  return (
    <>
      <header className="px-12 bg-black">
        <Navbar />
      </header>
      <main className="px-12">
        <div className="pt-8 flex flex-col justify-center items-center">
          <div className="w-full flex justify-around items-center">
            <h1 className="p-3 font-medium text-lg text-black basis-[20%]">
              Source
            </h1>
            <h1 className="p-3 font-medium text-lg text-black basis-[20%]">
              Title
            </h1>
            <h1 className="p-3 font-medium text-lg text-black basis-[60%]">
              Description
            </h1>
          </div>
          <div className="w-full h-[4px] bg-gray-300"></div>
          {savedNews.map((news, i) => {
            const isOdd = i % 2 === 1;
            const backgroundColor = isOdd ? "" : "bg-gray-100";

            return (
              <div
                key={i}
                className={`w-full flex justify-around items-start ${backgroundColor}`}
              >
                <div className="p-3 flex flex-col justify-start items-start basis-[20%]">
                  <h1 className="font-medium text-base text-justify text-gray-600">
                    {news.source + " - " + news.author}
                  </h1>
                  <Link
                    to={news.url}
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    News Page
                  </Link>
                </div>
                <h1 className="p-3 font-medium text-base text-justify basis-[20%] text-gray-600">
                  {news.title}
                </h1>
                <p className="p-3 font-medium text-base text-justify basis-[60%] text-gray-600">
                  {news.desc}
                </p>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default SavedPage;
