import React, { useState, useEffect, useRef } from "react";
import Tweet from "./Tweet";

export default function Tweets() {
  const [tweets, setTweets] = useState([]);
  const [interrupt, setInterrupt] = useState(null);
  const doc = useRef();

  useEffect(() => {
    const target = doc.current;
    let options = {
      rootMargin: "600px 0px 0px 0px",
      threshold: 1,
    };
    const callback = (entries) => {
      const [targetObj] = entries;

      if (!targetObj.isIntersecting) {
        fetch(`https://jsonplaceholder.typicode.com/comments`)
          .then((res) => {
            if (res.ok && res.status === 200) {
              return res.json();
            } else {
              setInterrupt("Request unfulfilled");
            }
          })
          .then((data) => {
            console.log(data);
            setInterrupt(null);
            setTweets(data);
          })
          .catch(() => {
            setInterrupt("Error connecting to server");
          });
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, []);
  return (
    <div className="container intersection" ref={doc}>
      {tweets.length > 0 &&
        tweets.map((item) => (
          <Tweet
            data={item}
            key={Math.random() * Math.random() * tweets.length}
          />
        ))}
    </div>
  );
}
