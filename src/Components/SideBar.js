import SideList from "./SideList";

const SideBar = () => {
  return (
    <div className="md:w-64 lg:w-80 border-r">
      <div className="w-full">
        <div className="p-4 mb-5">
          <button className="px-5 py-2 rounded-full bg-white shadow-md border focus:outline-none hover:shadow-lg">
            <div className="font-medium text-lg">Compose</div>
          </button>
        </div>
        <div className="upper__list">
          <SideList list={["Inbox", "Starred", "Sent", "Snoozed"]} />
        </div>
        <div className="lower__list">
          <div className="px-5 py-2 font-bold">Meeting</div>
          <SideList list={["New Meeting", "Join A Meeting"]} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
