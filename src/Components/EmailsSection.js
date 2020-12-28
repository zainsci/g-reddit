import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import ArrowClockwise from "../SVGs/ArrowClockwise";
import DotsVertical from "../SVGs/DotsVertical";

import Email from "./Email";
import Emails from "./Emails";

const EmailsSection = (props) => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/.json")
      .then((res) => res.json())
      .then((data) => {
        setEmails({ emails: data.data.children });
      });
  }, []);

  return (
    <section style={{ maxWidth: props.width }}>
      {emails ? (
        <div
          className={"overflow-hidden"}
          style={{ height: window.innerHeight - 68 }}
        >
          <Route path="/" exact>
            <div className="py-1 px-2 w-full border-b">
              <div className="flex justify-between items-center">
                <div className="flex">
                  <div
                    className="flex p-3 rounded-full cursor-pointer hover:bg-gray-200 hover:border"
                    title="Select"
                  >
                    <input
                      type="checkbox"
                      name="select"
                      id="Select"
                      className="cursor-pointer w-4 h-4"
                      title="Select"
                    />
                  </div>
                  <div
                    className="flex p-3 rounded-full cursor-pointer hover:bg-gray-200 hover:border"
                    title="Refresh"
                  >
                    <ArrowClockwise />
                  </div>
                  <div
                    className="flex p-3 rounded-full cursor-pointer hover:bg-gray-200 hover:border"
                    title="More"
                  >
                    <DotsVertical />
                  </div>
                </div>
                <div className="">{emails.length}</div>
              </div>
            </div>
            <div
              className="overflow-y-scroll"
              style={{ height: window.innerHeight - (68 + 50) }}
            >
              <Emails emails={emails} />
            </div>
          </Route>
          <Route path="/r/:subreddit/comments/:id/:perma/">
            <Email />
          </Route>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default EmailsSection;
