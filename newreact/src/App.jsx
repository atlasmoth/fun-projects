import React from "react";
import "./app.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Tweets from "./Tweets";

import MainTweet from "./MainTweet";
export default function App() {
  return (
    <div className="section home">
      <Switch>
        <Route
          exact
          path="/tweets/:tweetid"
          render={(...stuff) => <MainTweet {...stuff} />}
        />
        <Route path="/" component={Tweets} />
        <Route exact render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}
