const SideList = (props) => {
  return (
    <ul className="list">
      {props.list.map((listItem) => {
        return (
          <>
            <li className="list__item">
              <a href="/{listItem}" className="list__link">
                {listItem}
              </a>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default SideList;
