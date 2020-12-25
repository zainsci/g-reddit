const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">GReddit</div>
          <form>
            <input type="text" className="search" name="search" />
          </form>
          <div className="settings"></div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
