import SideList from "./SideList";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <div className="compose">Compose</div>
      </div>
      <div className="upper__list">
        <SideList list={["Inbox", "Starred", "Sent", "Snoozed"]} />
      </div>
      <div className="lower__list">
        <SideList list={["New Meeting", "Join A Meeting"]} />
      </div>
    </div>
  );
};

export default SideBar;
