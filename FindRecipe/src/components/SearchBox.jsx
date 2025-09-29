import { useState } from "react";

export default function SearchBox({ onSearchClick }) {
  const [searchValue, setSearchValue] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!searchValue.trim()) return;
    onSearchClick(searchValue);
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="search-bar-container flex items-center gap-3 mt-6 w-full max-w-xl"
    >
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Type recipe name..."
        className="search-input flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primaryBlue"
      />
      <button
        type="submit"
        className="search-btn px-5 py-2 bg-primaryBlue text-white font-medium rounded-lg shadow hover:bg-primaryBlueDark"
      >
        Search
      </button>
    </form>
  );
}
