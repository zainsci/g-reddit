const NavBar = () => {
  const submitSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <header className="w-full border-b">
        <nav className="flex justify-between items-center py-2 px-6">
          <div className="flex items-center">
            <a href="/">
              <div className="w-10 h-10 mx-1 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <svg
                    className="fill-current text-gray-600"
                    focusable="false"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
                  </svg>
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
              <svg
                className="fill-current text-gray-500"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.49,19l-5.73-5.73C15.53,12.2,16,10.91,16,9.5C16,5.91,13.09,3,9.5,3S3,5.91,3,9.5C3,13.09,5.91,16,9.5,16 c1.41,0,2.7-0.47,3.77-1.24L19,20.49L20.49,19z M5,9.5C5,7.01,7.01,5,9.5,5S14,7.01,14,9.5S11.99,14,9.5,14S5,11.99,5,9.5z"></path>
                <path d="M0,0h24v24H0V0z" fill="none"></path>
              </svg>
            </button>
            <input
              type="text"
              className="p-1 bg-gray-100 focus:outline-none w-full"
              autoComplete="off"
              name="search"
              placeholder="Search Mail"
            />
          </form>
          <div className="flex">
            <a href="/">
              <div className="w-10 h-10 mx-2 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <svg
                    class="fill-current text-gray-600"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13.85 22.25h-3.7c-.74 0-1.36-.54-1.45-1.27l-.27-1.89c-.27-.14-.53-.29-.79-.46l-1.8.72c-.7.26-1.47-.03-1.81-.65L2.2 15.53c-.35-.66-.2-1.44.36-1.88l1.53-1.19c-.01-.15-.02-.3-.02-.46 0-.15.01-.31.02-.46l-1.52-1.19c-.59-.45-.74-1.26-.37-1.88l1.85-3.19c.34-.62 1.11-.9 1.79-.63l1.81.73c.26-.17.52-.32.78-.46l.27-1.91c.09-.7.71-1.25 1.44-1.25h3.7c.74 0 1.36.54 1.45 1.27l.27 1.89c.27.14.53.29.79.46l1.8-.72c.71-.26 1.48.03 1.82.65l1.84 3.18c.36.66.2 1.44-.36 1.88l-1.52 1.19c.01.15.02.3.02.46s-.01.31-.02.46l1.52 1.19c.56.45.72 1.23.37 1.86l-1.86 3.22c-.34.62-1.11.9-1.8.63l-1.8-.72c-.26.17-.52.32-.78.46l-.27 1.91c-.1.68-.72 1.22-1.46 1.22zm-3.23-2h2.76l.37-2.55.53-.22c.44-.18.88-.44 1.34-.78l.45-.34 2.38.96 1.38-2.4-2.03-1.58.07-.56c.03-.26.06-.51.06-.78s-.03-.53-.06-.78l-.07-.56 2.03-1.58-1.39-2.4-2.39.96-.45-.35c-.42-.32-.87-.58-1.33-.77l-.52-.22-.37-2.55h-2.76l-.37 2.55-.53.21c-.44.19-.88.44-1.34.79l-.45.33-2.38-.95-1.39 2.39 2.03 1.58-.07.56a7 7 0 0 0-.06.79c0 .26.02.53.06.78l.07.56-2.03 1.58 1.38 2.4 2.39-.96.45.35c.43.33.86.58 1.33.77l.53.22.38 2.55z"></path>
                    <circle cx="12" cy="12" r="3.5"></circle>
                  </svg>
                </div>
              </div>
            </a>
            <a href="/">
              <div className="w-10 h-10 mx-1 rounded-full hover:bg-gray-100 ease-in duration-200">
                <div className="p-2">
                  <svg
                    class="fill-current text-gray-600"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                  </svg>
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
