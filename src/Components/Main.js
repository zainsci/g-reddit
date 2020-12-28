import SideBar from "./SideBar";
import EmailsSection from "./EmailsSection";
import { useState } from "react";

const Main = () => {
  const [width, setWidth] = useState(0);
  const getWidth = () => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= 1024) {
      setWidth(innerWidth - 320);
    } else if (innerWidth >= 768) {
      setWidth(innerWidth - 256);
    } else {
      setWidth(innerWidth - 150);
    }
  };

  window.onresize = getWidth;
  window.onload = getWidth;

  return (
    <main
      className="flex w-full"
      style={{
        height: window.innerHeight - 67,
      }}
    >
      <SideBar />
      <EmailsSection width={width} />
    </main>
  );
};

export default Main;
