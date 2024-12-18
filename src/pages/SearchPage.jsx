import { useParams } from "react-router-dom";
import CardNews from "../components/ui/CardNews";
import Navbar from "../components/ui/Navbar";
import useGETDataWithToken from "../hooks/useGETDataWithToken";
import { getMinMonthDate } from "../utils/utils";

const SearchPage = () => {
  const { q } = useParams();
  const { data, error, isLoading } = useGETDataWithToken(
    `${import.meta.env.VITE_APP_API_HOST}/svc/search/v2/articlesearch.json`,
    import.meta.env.VITE_APP_API_KEY,
    getMinMonthDate(0),
    getMinMonthDate(11),
    q,
    "relevance"
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <header className="px-12 bg-black">
        <Navbar />
      </header>
      <main className="px-12">
        <div className="py-6 flex flex-col justify-center items-center gap-6">
          <h1 className="font-medium text-4xl text-black">{q} News</h1>
          <div className="w-full h-[2px] bg-gray-200"></div>
          <div className="grid grid-cols-3 gap-12">
            {data
              .filter((article) => article.byline.original !== null)
              .map((news, index) => {
                return (
                  <CardNews
                    key={index}
                    source={news.source}
                    title={news.headline.main}
                    author={news.byline.original}
                    desc={news.lead_paragraph}
                    url={news.web_url}
                  />
                );
              })}
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchPage;
