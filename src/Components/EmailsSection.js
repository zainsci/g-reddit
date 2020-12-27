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
        setEmails({ emails: data.data.children.slice(0, 10) });
      });
  }, []);

  return (
    <section>
      {emails ? (
        <div
          className={"overflow-hidden"}
          style={{ height: window.innerHeight - 67 }}
        >
          <div className="overflow-y-scroll h-full">
            <Route path="/" exact>
              <div className="p-3 w-full border-b">
                <div className="flex justify-between items-center">
                  <div></div>
                  <div className="">{emails.length}</div>
                </div>
              </div>
              <Emails emails={emails} />
            </Route>
            <Route path="/r/:subreddit/comments/:id/:perma/">
              <Email />
            </Route>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </section>
  );
};

export default EmailsSection;
