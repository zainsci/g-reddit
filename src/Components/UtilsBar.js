import ArrowClockwise from "../SVGs/ArrowClockwise";
import DotsVertical from "../SVGs/DotsVertical";

const UtilsBar = (props) => {
  return (
    <div className="py-1 px-2 w-full border-b">
      <div className="flex justify-between items-center">
        <div className="flex">
          <IconWrapper title="Select">
            <input
              type="checkbox"
              name="select"
              id="Select"
              className="cursor-pointer w-4 h-4"
              title="Select"
            />
          </IconWrapper>
          <IconWrapper title="Refresh">
            <ArrowClockwise />
          </IconWrapper>
          <IconWrapper title="More">
            <DotsVertical />
          </IconWrapper>
        </div>
        <div className="">{props.emailLength}</div>
      </div>
    </div>
  );
};

const IconWrapper = (props) => {
  return (
    <div
      className="flex p-3 rounded-full cursor-pointer hover:bg-gray-100 hover:border ease-in duration-200"
      title={props.title}
    >
      {props.children}
    </div>
  );
};

export default UtilsBar;
