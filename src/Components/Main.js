import SideBar from "./SideBar";
import Emails from "./Emails";

const Main = () => {
  return (
    <main
      className="flex"
      style={{
        height: window.innerHeight - 67,
      }}
    >
      <SideBar />
      <div className="emails">
        <Emails />
      </div>
    </main>
  );
};

export default Main;
