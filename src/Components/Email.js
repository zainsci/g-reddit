import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Email = () => {
  const { subreddit, id, perma } = useParams();

  const [email, setEmail] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log(
      `https://www.reddit.com/r/${subreddit}/comments/${id}/${perma}/.json`
    );
    fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}/${perma}/.json`)
      .then((res) => res.json())
      .then((data) => {
        setEmail(data[0].data.children[0].data);
        setComments(data[1].data.children);
        console.log(data[0].data.children[0].data);
        console.log(data[1].data.children[0]);
      });
  }, [subreddit, id, perma]);

  return (
    <div className="h-full overflow-y-scroll">
      {email ? (
        <>
          <div className="p-3 mb-3">
            <div className="text-xl font-semibold">{email.title}</div>
          </div>
          {email.domain === "i.redd.it" || email.domain === "i.imgur.com" ? (
            <div className="m-5 w-2/5">
              <img src={email.url} alt={email.title} />
            </div>
          ) : null}
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Email;
