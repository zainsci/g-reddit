import { useState } from "react";
import Burger from "../SVGs/Burger";
import DotGrid from "../SVGs/DotGrid";
import Search from "../SVGs/Search";
import Settings from "../SVGs/Settings";

const NavBar = () => {
  const [search, setSearch] = useState("");

  const submitSearch = (e) => {
    e.preventDefault();
    window.location.pathname = "/r/" + search;
  };

  const getSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <header className="w-full border-b">
        <nav className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center">
            <a href="/">
              <div className="w-10 h-10 mx-1 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <Burger />
                </div>
              </div>
            </a>
            <a href="/">
              <div className="text-2xl">
                <span className="font-semibold">G</span>Reddit
              </div>
            </a>
          </div>
          <form
            onSubmit={submitSearch}
            className="w-96 px-3 py-2 border rounded-lg bg-gray-100 focus-within:shadow-md flex items-center"
          >
            <button
              className="p-1 rounded-full hover:bg-gray-200 mr-1 focus:outline-none"
              type="submit"
            >
              <Search />
            </button>
            <input
              type="text"
              className="p-1 bg-gray-100 focus:outline-none w-full"
              autoComplete="off"
              name="search"
              placeholder="Search Mail"
              value={search}
              onChange={getSearch}
            />
          </form>
          <div className="flex">
            <a href="/">
              <div className="w-10 h-10 mx-2 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <Settings />
                </div>
              </div>
            </a>
            <a href="/">
              <div className="w-10 h-10 mx-1 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <DotGrid />
                </div>
              </div>
            </a>

            <a href="/">
              <div className="w-10 h-10 mx-1 rounded-full bg-green-500 ml-2">
                <div className="text-gray-100 flex justify-center p-2">G</div>
              </div>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
