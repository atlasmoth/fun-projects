import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Tweet({ data }) {
  return (
    <Link to={`/tweets/${data.name}`}>
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
                <strong>{data.name}</strong> <small>{data.email}</small>{" "}
                <small>31m</small>
                <br />
                {data.body}
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
                </span>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </Link>
  );
}
