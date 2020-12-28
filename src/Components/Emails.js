import { Link } from "react-router-dom";
import StarOutline from "../SVGs/StarOutline";

const Emails = (props) => {
  const emails = props.emails.emails;

  const getTime = (timestamp) => {
    console.log(timestamp);
    const d = new Date(timestamp);
    console.log(d.toLocaleString());
    const date = d.getDate();
    const month = d.getMonth();
    const time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    console.log(time, date, month);
    return `${time}, ${date}\\${month}`;
  };

  return (
    <div>
      {emails
        ? emails.map((email) => {
            return (
              <Link key={email.data.id} to={email.data.permalink}>
                <div className="overflow-hidden text-sm hover:shadow-md">
                  <div className="py-1 px-2 flex items-center font-semibold border-b hover:shadow-md cursor-pointer flex">
                    <div className="w-1/5 flex items-center overflow-hidden">
                      <div className="p-1.5 mr-2 rounded-full hover:border hover:bg-gray-200">
                        <StarOutline />
                      </div>
                      r/{email.data.subreddit}
                    </div>
                    <div className="w-3/5 whitespace-nowrap overflow-hidden">
                      {email.data.title}
                    </div>
                    <div className="w-1/5 text-right pr-5">
                      {getTime(email.data.created_utc)}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
      <div className="w-full h-16">
        <div className="flex justify-center items-center mt-5">
          <small className="text-gray-400">
            <a href="/" className="hover:underline">
              Terms
            </a>
            {" • "}
            <a href="/" className="hover:underline">
              Privacy
            </a>
            {" • "}
            <a href="/" className="hover:underline">
              Program Policy
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Emails;
