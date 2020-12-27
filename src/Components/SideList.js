import { useState } from "react";

const SideList = (props) => {
  return (
    <ul className="list">
      {props.list.map((item) => {
        return <ListItem item={item} key={item} />;
      })}
    </ul>
  );
};

const ListItem = (props) => {
  const [active, setActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();

    const allAnchores = document.querySelectorAll(".list-item");
    allAnchores.forEach((item) => {
      item.classList.remove("bg-red-200");
      item.classList.remove("hover:bg-red-200");
    });

    setActive(true);
  };
  return (
    <>
      <li
        className={`hover:bg-gray-100 rounded-r-full pointer list-item ${
          active ? "bg-red-200 hover:bg-red-200" : ""
        }`}
      >
        <a href={`/${props.item}`} className="" onClick={handleClick}>
          <div className="py-2 px-5">
            <div className="font-medium">{props.item}</div>
          </div>
        </a>
      </li>
    </>
  );
};

export default SideList;
