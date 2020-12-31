import { Route, Switch } from "react-router-dom";

import Email from "./Email";
import Emails from "./Emails";

const EmailsSection = (props) => {
  return (
    <section className="w-full" style={{ maxWidth: props.width }}>
      <div
        className="overflow-hidden"
        style={{ height: window.innerHeight - 68 }}
      >
        <Switch>
          <Route path="/" exact>
            <Emails />
          </Route>
          <Route path="/r/:subreddit" exact>
            <Emails />
          </Route>
          <Route path="/r/:subreddit/comments/:id/:perma/" exact>
            <Email />
          </Route>
        </Switch>
      </div>
    </section>
  );
};

export default EmailsSection;
