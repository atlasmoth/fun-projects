import React, { useState, useEffect } from "react";
import Form from "./Form";

export default function MainTweet(props) {
  const { match } = props[0];
  const [interrupt, setInterrupt] = useState(null);
  const [tweet, setTweet] = useState("");
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    let url = `https://jsonplaceholder.typicode.com/comments/${match.params.tweetid}`;
    fetch(url)
      .then((res) => {
        if (res.ok && res.status === 200) {
          return res.json();
        } else {
          setInterrupt("Request unfulfilled");
        }
      })
      .then((tweet) => {
        setInterrupt(null);
        setTweet(tweet);
      })
      .catch(() => {
        setInterrupt("Error connecting to server");
      });
  }, []);

  return (
    <>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt="Avatar"
              />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{tweet?.name}</strong> <small>{tweet?.email}</small>{" "}
                <small>31m</small>
                <br />
                {tweet?.body}
              </p>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <span className="level-item" aria-label="reply">
                  <span className="icon is-small">
                    <i className="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </span>
                <span className="level-item" aria-label="retweet">
                  <span className="icon is-small">
                    <i className="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </span>
                <span className="level-item" aria-label="like">
                  <span className="icon is-small">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </span>
                  <span className="icon is-small">
                    <i className="fas fa-inbox" aria-hidden="true"></i>
                  </span>
                </span>
              </div>
            </nav>
          </div>
        </article>
      </div>
      <Form />
    </>
  );
}
