const NavBar = () => {
  return (
    <>
      <header className="w-full border-b">
        <nav className="flex justify-between items-center py-2 px-6">
          <a href="/">
            <div className="text-2xl">
              <span className="font-semibold">G</span>Reddit
            </div>
          </a>
          <form>
            <input
              type="text"
              className="w-96 p-3 border rounded-lg bg-gray-100 focus:outline-none focus:shadow-md"
              autoComplete="off"
              name="search"
              placeholder="Search Mail"
            />
          </form>
          <div className="flex">
            <a href="/">
              <div className="border rounded-full w-10 h-10 mx-2 bg-green-500"></div>
            </a>
            <a href="/">
              <div className="border rounded-full w-10 h-10 mx-2 bg-red-600"></div>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
