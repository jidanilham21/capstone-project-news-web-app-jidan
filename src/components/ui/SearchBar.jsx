import { Link } from "react-router-dom";
import Input from "../Input";
import { useState } from "react";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleOnChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-4">
      <Input
        type="text"
        id="searchBar"
        value={query}
        placeholder="Cari Berita..."
        onChange={handleOnChange}
      />
      <Link
        to={`/search/${query}`}
        className="p-2 rounded-sm bg-yellow-500 text-black"
      >
        <h1>Cari berita</h1>
      </Link>
    </div>
  );
};

export default SearchBar;
