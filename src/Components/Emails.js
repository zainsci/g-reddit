import { Link } from "react-router-dom";
import StarOutline from "../SVGs/StarOutline";

const Emails = (props) => {
  const emails = props.emails.emails;
  console.log(emails);

  return (
    <div>
      {emails
        ? emails.map((email) => {
            return (
              <Link key={email.data.id} to={email.data.permalink}>
                <div className="overflow-hidden">
                  <div className="py-1 px-2 flex items-center font-semibold border-b hover:shadow-md cursor-pointer flex">
                    <div className="p-1.5 mr-2 rounded-full hover:border hover:bg-gray-200">
                      <StarOutline />
                    </div>
                    <div className="w-1/5 ">r/{email.data.subreddit}</div>
                    <div className="w-2/5 whitespace-nowrap overflow-hidden">
                      {email.data.title}
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
