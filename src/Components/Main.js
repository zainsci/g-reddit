import SideBar from "./SideBar";
import Emails from "./Emails";

const Main = () => {
  return (
    <main>
      <SideBar />
      <div className="emails">
        <Emails />
      </div>
    </main>
  );
};

export default Main;
