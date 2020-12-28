import SideBar from "./SideBar";
import EmailsSection from "./EmailsSection";

const Main = () => {
  return (
    <main
      className="flex"
      style={{
        height: window.innerHeight - 67,
      }}
    >
      <SideBar />
      <div className="w-full">
        <EmailsSection />
      </div>
    </main>
  );
};

export default Main;
