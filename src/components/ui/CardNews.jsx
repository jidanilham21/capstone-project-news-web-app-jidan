import PropTypes from "prop-types";
import Button from "../Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { saveNews, unSaveNews } from "../../redux/newsSlice";

const CardNews = ({ source, title, author, desc, url }) => {
  const dispatch = useDispatch();
  const savedNews = useSelector((state) => state.savedNews);

  const handleSave = () => {
    dispatch(
      saveNews({
        source: source,
        title: title,
        author: author,
        desc: desc,
        url: url,
      })
    );
  };

  const handleUnSave = () => {
    dispatch(
      unSaveNews({
        source: source,
        title: title,
        author: author,
        desc: desc,
        url: url,
      })
    );
  };

  const isSaved = savedNews.find((news) => news.url === url);

  return (
    <div className="flex flex-col justify-start items-start gap-2">
      <div className="flex flex-col justify-start items-start gap-2">
        <h1 className="font-medium text-base text-gray-800">{source}</h1>
        <h1 className="font-bold text-2xl text-gray-800">{title}</h1>
        <h1 className="font-medium text-sm text-gray-500">{author}</h1>
        <p className="font-medium text-base text-justify text-gray-800">
          {desc}
        </p>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link
          to={url}
          target="_blank"
          className="p-2 rounded-sm bg-cyan-500 text-black"
        >
          <h1>News Page</h1>
        </Link>
        {isSaved ? (
          <Button
            type="button"
            variant="saved"
            label="Un-Saved"
            onClick={handleUnSave}
          />
        ) : (
          <Button
            type="button"
            variant="secondary"
            label="Save"
            onClick={handleSave}
          />
        )}
      </div>
    </div>
  );
};

export default CardNews;

CardNews.propTypes = {
  source: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  desc: PropTypes.string,
  url: PropTypes.string,
};
