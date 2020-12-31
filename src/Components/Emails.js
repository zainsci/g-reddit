import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import StarOutline from "../SVGs/StarOutline";
import UtilsBar from "./UtilsBar";
import Footer from "./Footer";

const Emails = (props) => {
  const [emailsArr, setEmailsArr] = useState([]);
  const { subreddit } = useParams();

  useEffect(() => {
    if (!subreddit) {
      fetch("https://www.reddit.com/.json")
        .then((res) => res.json())
        .then((data) => {
          setEmailsArr(data.data.children);
        });
    } else {
      fetch(`https://www.reddit.com/r/${subreddit}/.json`)
        .then((res) => res.json())
        .then((data) => {
          setEmailsArr(data.data.children);
        });
    }
  }, []);

  const getTime = (timestamp) => {
    const d = new Date(timestamp * 1000);
    const date = d.getUTCDate();
    const month = d.getUTCMonth();
    const time = `${d.getUTCHours() % 12}:${d.getUTCMinutes()} ${
      parseInt(d.getUTCHours()) > 12 ? "PM" : "AM"
    }`;
    return `${time} - ${date}/${month + 1}`;
  };

  return (
    <div>
      <UtilsBar emailLength={emailsArr.length} />
      <div
        className="overflow-y-scroll"
        style={{ height: window.innerHeight - (68 + 50) }}
      >
        {emailsArr
          ? emailsArr.map((email) => {
              return (
                <Link key={email.data.id} to={email.data.permalink}>
                  <div className="overflow-hidden text-sm hover:shadow-md">
                    <div className="py-1 px-2 flex items-center font-semibold border-b hover:shadow-md cursor-pointer flex">
                      <div
                        className="w-1/5 flex items-center overflow-hidden"
                        title={email.data.subreddit}
                      >
                        <div className="p-1.5 mr-2 rounded-full hover:border hover:bg-gray-200">
                          <StarOutline />
                        </div>
                        r/{email.data.subreddit}
                      </div>
                      <div
                        className="w-3/5 whitespace-nowrap overflow-hidden"
                        title={email.data.title}
                      >
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
        <Footer />
      </div>
    </div>
  );
};

export default Emails;
