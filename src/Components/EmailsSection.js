import { useEffect, useState } from "react";
import { Route } from "react-router-dom";

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
          style={{ height: window.innerHeight - 67 }}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current w-4 h-4"
                      viewBox="0 0 16 16"
                      title="Refresh"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                      />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                  </div>
                  <div
                    className="flex p-3 rounded-full cursor-pointer hover:bg-gray-200 hover:border"
                    title="More"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="fill-current w-4 h-4"
                      viewBox="0 0 16 16"
                      title="More"
                    >
                      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                    </svg>
                  </div>
                </div>
                <div className="">{emails.length}</div>
              </div>
            </div>
            <div className="overflow-y-scroll h-full">
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
