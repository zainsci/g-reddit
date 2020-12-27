import { Link } from "react-router-dom";

const Emails = (props) => {
  const emails = props.emails.emails;
  console.log(emails);

  return (
    <div>
      {emails
        ? emails.map((email) => {
            return (
              <Link key={email.data.id} to={email.data.permalink}>
                <div className="p-2 font-medium border-b hover:shadow-md cursor-pointer">
                  <div>{email.data.title}</div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default Emails;
