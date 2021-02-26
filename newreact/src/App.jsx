import React from "react";
import "./app.css";
// import Test from "./Test";
import { Switch, Route, Redirect } from "react-router-dom";
import Tweets from "./Tweets";
import Tweet from "./Tweet";
export default function App() {
  return (
    <div className="section home">
      <Switch>
        <Route exact path="/tweets/:tweetid" render={() => <Tweet />} />
        <Route path="/" component={Tweets} />
        <Route exact render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}
