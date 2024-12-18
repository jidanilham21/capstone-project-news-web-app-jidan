import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="w-full py-4 flex justify-between items-center bg-black">
      <div className="flex justify-center items-center gap-10">
        <Link to="/">
          <h1 className="font-medium text-2xl text-white">JNews</h1>
        </Link>
        <div className="flex justify-center items-center gap-8">
          <Link to="/">
            <h1 className="font-medium text-xl text-white">Indonesia</h1>
          </Link>
          <Link to="/programming">
            <h1 className="font-medium text-xl text-white">Programming</h1>
          </Link>
          <Link to="/covid19">
            <h1 className="font-medium text-xl text-white">COVID-19</h1>
          </Link>
          <Link to="/saved">
            <h1 className="font-medium text-xl text-white">Saved</h1>
          </Link>
        </div>
      </div>
      <SearchBar />
    </div>
  );
};

export default Navbar;
